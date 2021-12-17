import Mic from '../images/Mic.png';
import styled, { css } from 'styled-components';
import { AuthProvider, useAuth, db, storage} from '../Firebase';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { FaCloudUploadAlt, FaFileAudio, FaTrashAlt, FaTimes } from 'react-icons/fa';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';

const Mars = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0,0, 0.8);
`;
const Modal = styled.div`
  width: 77%;
  height: 77%;
  color: black;
  display: flex;
  overflow: hidden;
  background: white;
  border-radius: 12px;
  justify-content: space-between;
  img {
  	width: 22%;
  	height: 100%;
  }
`;
const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  button{
  	width: 28%;
	  color: #fff;
	  padding: 2px;
	  cursor: pointer;
	  font-size: 15px;
	  font-weight: 600;
	  transition: all, 240ms ease-in-out;
	  border-radius: 10px 10px 10px 10px;
	  background: darkslategray;
	  &:hover {
	    background-color: mediumseagreen;
	  }
  }
`;
const Dropzone = styled.form`
  width: 400px;
  height: 202px;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  background-color: #eee;
  border: #aaa 2px dashed;
  justify-content: center;
  ${({ onEnter }) => onEnter && css` border-color: #000; `}
  input {
  	opacity: 0;
	  width: 400px;
	  height: 200px;
	  cursor: pointer;
	  position: absolute;
  }
  p {
  	color: gray;
  	font-size: 16px;
	  font-weight: 600;
	  text-align: center;
  }
`;
const Cloud = styled(FaCloudUploadAlt)`
  font-size: 122px;
  color: darkslategray;
`;
const Preview = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h3 {
  	margin: 12px;
  }
`;
const Item = styled.div`
  width: 300px;
  height: 44px;
  display: flex;
  margin-bottom: 4px;
  border-radius: 6px;
  align-items: center;
  background-color: #ccc;
  justify-content: space-between;
`;
const Info = styled.div`
  display: flex: 
  flex-direction: column;
  p {
  	font-size: 12px;
  }
`;
const FileIcon = styled(FaFileAudio)`
  font-size: 22px;
  margin-left: 4px;
  color: darkslategray;
`;
const Remove = styled(FaTrashAlt)`
  color: #000;
  cursor: pointer;
  margin-right: 4px;
`;
const Close = styled(FaTimes)`
	margin: 4px;
  font-size: 28px;
  cursor: pointer;
`;

export const ModalUpload = ({ open, setOpen }) => {
  const [onEnter, setOnEnter] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [progress, setProgress] = useState(0);
  // eslint-disable-next-line
  const [audio, setAudio] = useState([]);
  const [files, setFiles] = useState([]);
  const { user } = useAuth();
  const marsRef = useRef();

  const reset = () => {
    setOpen(false);
    setProgress(0);
    setFiles([]);
  }
  const onDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOnEnter(true);
  };
  const onDragExit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOnEnter(false);
  };
  const onDrop = (e) => {
    e.stopPropagation();
    setOnEnter(false);
  };
  const minDropFiles = (e) => {
    let files = e.target.files;
      if(files.length <= 2) {
        e.target.value = null;
        return false;
      }
      return true;
  };
  const accFileType = (e) => {
    let files = e.target.files;
    let err = '';
    const types = ['audio/x-wav'];
    for(let x = 0; x < files.length; x++) {
      if(types.every(type => files[x].type !== type)) {
        err += files[x].type + 'is not a supported format, Only WAV files accepted';
      }
    };
    if(err !== '') {
      e.target.value = null;
      return false;
    }
    return true;
  };
  const handleDrop = (e) => {
    setOnEnter(false);
    if(minDropFiles(e) && accFileType(e)) {
      setFiles(files)
    }
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      setFiles((prevState) => [...prevState, newFile]);
    }
  };
  const handleUpload = async (e) => {
  	setLoading(true);
  	const docRef = await addDoc(collection(db, 'users', user.email, 'audio'), {
  		created: serverTimestamp(),
  	});
  	// eslint-disable-next-line
  	const uploadFiles = [];
  	files.forEach((file) => {
  		const audioRef = ref(storage, `${user.email}/${file.name}`);
  		const uploadTask = uploadBytesResumable(audioRef, file);
  		uploadTask.on('state_changed', (snapshot) => {
				const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(prog);
				},
				(error) => alert(error.message), () =>{
					getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
						await updateDoc(doc(db, 'users', user.email, 'audio', docRef.id), {
							audio: url,
						})
						setAudio(url);
						setLoading(false);
						reset();
					});
				}
			);
  	})
  }
  const handleDelete = (file) => {
    const updatedFile = [...files];
    updatedFile.splice(files.indexOf(file), 1);
    setFiles(updatedFile);
  }
  const close = (e) => {
    if(marsRef.current === e.target) {
        setOpen(false);
      }
    }
  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && open) {
      setOpen(false);
    }
  }, [setOpen, open]);
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <AuthProvider>
      {open ? (
        <Mars onClick={close} ref={marsRef}>
          <Modal open={open} setOpen={setOpen}>
            <img src={Mic} alt='' />
            <Col>
              <h3>Uploading...{progress}%</h3>
              <progress value={progress} max="100" />
              <Dropzone
                ref={marsRef}
                onDrop={onDrop}
                onEnter={onEnter}
                onDragExit={onDragExit}
                onDragEnter={onDragEnter}
              >
                <input 
                  multiple 
                  type='file' 
                  accept='.wav'
                  onChange={handleDrop}
                />
                <Cloud />
                <p>Drag & Drop WAV files here or click to browse</p>
              </Dropzone>
              <h3>Please drop or select 3 files minimum</h3>
              <button onClick={handleUpload}>
              	{loading ? 'Uploading' : 'Upload'}
              </button>
            </Col>
            <Preview>
              <h3>Files ready for upload</h3>
            	{files.length > 0 ? (
                <Preview>
                  {files.map((item, index) => (
                    <Item key={index}>
                      <FileIcon />
                      <Info>
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                      </Info>
                      <Remove onClick={() => handleDelete(item)} />
                    </Item>
                  ))}
                </Preview>
              ) : null}
            </Preview>
            <Close onClick={reset} />
          </Modal>
        </Mars>
      ) : null}
    </AuthProvider>
  );
};
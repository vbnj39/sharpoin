
import './App.css';
import clip from './media/video/pre.mp4';
import Documents from './Document/documents';
import { Fragment, useEffect, useState } from 'react';
import { InitSpin } from './comp/initial-spin/initial-spin';
import SharePPre from './comp/sharepre/sharepre';
import {Ms365} from './comp/m65/m65';
import { CoPilot } from './comp/copilot/copilot';

function App() {

  const [showDocuments, hideDocuments] = useState(false);
  const display_documents = ()=> hideDocuments(true);

  const reload_web_page_ = _=> window.location.reload();

  const pointer = {
    cursor:'pointer'
  };


  const [eraOfAI, setEraOfAI] = useState(false);
  const [sharePointPre, setSharePointPre] = useState(false);
  const [ms365, setMs365] = useState(false);
  const [coPilot, setCoPilot] = useState(false);
  const [landPg, setLandPg] = useState(true);


  useEffect(()=>{
    setEraOfAI(true);
    setSharePointPre(false);
    setMs365(false);
    setCoPilot(false);
    setLandPg(false);

    setTimeout(() => {

      setEraOfAI(false);
      setSharePointPre(true);
      setMs365(false);
      setCoPilot(false);
      setLandPg(false);

      setTimeout(() => {

        setEraOfAI(false);
        setSharePointPre(false);
        setMs365(true);
        setCoPilot(false);
        setLandPg(false);

        setTimeout(() => {

          setEraOfAI(false);
          setSharePointPre(false);
          setMs365(false);
          setCoPilot(true);
          setLandPg(false);

          setTimeout(() => {

            setEraOfAI(false);
            setSharePointPre(false);
            setMs365(false);
            setCoPilot(false);
            setLandPg(true);
            
          }, 2000);
          
        }, 3000);
        
      }, 3000);
      
    }, 3000);
  }, []);


  return (<>


   { eraOfAI ? <InitSpin /> : undefined }

   { sharePointPre ? <SharePPre /> : undefined }

   { ms365 ? <Ms365 /> : undefined }

   { coPilot ? <CoPilot /> : undefined }


{  landPg ?

      <Fragment>

          
          { showDocuments ? 
          
          
          <Documents/>

          // ternary condition below; carefully observe the colon

            :

                    <Fragment>




                   
    <nav className="navbar" style={{background:'white', padding:0, margin:0}} >
        <div className="container">
            {/* <a className="navbar-brand" href="/"> */}
              <img 
                src="https://cdn.glitch.global/26e3792d-bd6f-421e-a2c4-ea3097e5c19f/loo.jpg?v=1675748203267" 
                alt='hello'
                onClick={reload_web_page_}
                style={pointer}
              />
            {/* </a> */}
            <button className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon text-dark"></span>
    </button>

        </div>
    </nav>
                    <video 
                        loop
                        autoPlay 
                        className='f_video_player_'
                        muted 
                        style={pointer}
                        title='Introducing SharePoint Premium'
                        tabIndex={-1}
                        src={clip}
                        poster={`https://cdn.glitch.global/019407fd-3111-4171-a0b0-e641caf001f1/SharePointIgnite_tbmnl_en-us.jpg?v=1707992956109`} 
                        preload='metadata'>
                    </video>

    <div className="container">
        <div className="wrap">

            <img 
              src="https://cdn.glitch.global/26e3792d-bd6f-421e-a2c4-ea3097e5c19f/pnt.png?v=1675748296014"
              alt='alternate' 
              onClick={display_documents}
            />


        </div>
    </div>




                    </Fragment> 
                    }
          </Fragment>


  : undefined }
    </>);
};

export default App;

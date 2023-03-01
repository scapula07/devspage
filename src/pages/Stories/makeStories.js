import React ,{useState,useMemo,useEffect} from 'react'
import userImg from "../../assets/storieImg.png"
import {AiFillCloseCircle,AiOutlineClose,AiOutlineComment} from "react-icons/ai"
import {IoRadioButtonOn} from "react-icons/io5"
import { Player, useAssetMetrics, useCreateAsset } from '@livepeer/react';


export default function MakeStories() {
    const [video, setVideo] = useState();
    const [captured,setCaptured]=useState(false)
    useEffect(()=>{

    },[])
    
    const {
        mutate: createAsset,
        data: asset,
        status,
        progress,
        error,
      } = useCreateAsset(
        video
          ? {
              sources: [{ name: video.name, file: video }] 
            }
          : null,
       );

       const { data: metrics } = useAssetMetrics({
        assetId: asset?.[0].id,
        refetchInterval: 30000,
      });

      console.log(asset)
     
      var theStream;
      var theRecorder;
      var recordedChunks = [];
      
      function gotMedia(stream) {
        theStream = stream;
        var video = document.querySelector('video');
        video.srcObject = stream;
        try {
         var recorder = new MediaRecorder(stream, {mimeType : "video/webm"});
        } catch (e) {
          console.error('Exception while creating MediaRecorder: ' + e);
          return;
        }
        
        theRecorder = recorder;
        recorder.ondataavailable =
            (event) => { recordedChunks.push(event.data); };
        recorder.start(100);
  
       }

       const capture=()=> {

        const constraints = { "video": { width: { max: 420 } }, "audio" : true };
  
          navigator.mediaDevices.getUserMedia(constraints)
            .then(gotMedia)
            .catch(e => { console.error('getUserMedia() failed: ' + e); });

            setCaptured(true)
      }

      function stop() {
            theRecorder?.stop();
            theStream?.getTracks()?.forEach(track => { track?.stop(); });
        
            var blob = new Blob(recordedChunks, {type: "video/webm"});
            const file=new File([blob],"videomsg.json")
            console.log(file)
            // var url =  URL.createObjectURL(blob);
            setVideo(file )
            createAsset?.();
        
        // setTimeout(function() { URL.revokeObjectURL(url); }, 100);
    
        }
  

      const progressFormatted = useMemo(
        () =>
          progress?.[0].phase === 'failed'
            ? 'Failed to process video.'
            : progress?.[0].phase === 'waiting'
            ? 'Waiting'
            : progress?.[0].phase === 'uploading'
            ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
            : progress?.[0].phase === 'processing'
            ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
            : null,
        [progress],
      );
   
      console.log(progress,"pp")
    
  return (
    <div className='bg-slate-800 relative h-screen w-screen overflow-y-scroll text-white '>
    <div className='w-full '>
        <div className='flex w-full justify-between items-center px-4 py-6 absolute  z-10 '>
                <main className='flex items-center space-x-2'>
                        <img src={userImg} className="h-10 w-10 rounded-full" />
                        <h5 className='flex flex-col'>
                            <span className='text-sm'>{"Russell Lee"}</span>
                            <span className='text-sm font-light'>{"01:08:30"}</span>

                        </h5>
                    </main>   
                <AiFillCloseCircle className='text-3xl'/>
            </div>
      </div>

      <div className='h-screen flex flex-col justify-center w-screen'>
          <video  controls autoPlay style={{height:"100vh"}}>
               <source src="movie.mp4" type="video/mp4" />
            </video>

           <h5> {progressFormatted}</h5>
         </div>



      <div className='absolute w-full bottom-0  py-6 z-30'>
                     <main className='flex items-center justify-center  space-x-2 px-4 py-2 '>
                           {captured===false?
                              <IoRadioButtonOn className='text-5xl' onClick={capture}/>
                             :
                              <IoRadioButtonOn className='text-5xl text-red-500' onClick={stop}/>
                            }
                      </main>

                     <main className=' overflow-x-scroll  w-full n py-2 items-center'>
                         <main className='flex items-center space-x-4 w-full justify-center space-x-4 ' style={{width:"110%"}}>
                               <h5>TYPE</h5>
                               <h5>LIVE</h5>
                               <h5>NORMAL</h5>
                               <h5>ZOOM</h5>
                               <h5>FOCUS</h5>
                               <h5>BEAUTIFUL</h5>
                         </main>
                     </main>

                </div>



</div>
  )
}

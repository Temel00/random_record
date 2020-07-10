import {base} from '@airtable/blocks';
import {ViewPicker, Label, Loader, ProgressBar, useBase, useRecords, Icon, Box, Button, initializeBlock} from '@airtable/blocks/ui';
import React, { useState } from "react";
import {Howl, Howler} from 'howler';


function HelloWorldBlock() {

let table = base.getTable('Music Collaborations');
let view = table.getView('5 Star Songs');
const [myView, setView] = useState(view);
let queryResult = myView.selectRecords();
let records = useRecords(queryResult);
var sound1Elapsed = 0;
var sound2Elapsed = 0;
var sound3Elapsed = 0;
var x;
var y;
var z;
var s1Dur = 120;
var s2Dur = 120;
var s3Dur = 120;
var pBar1Width = 1;


//TIME COUNT
function movePlayhead1() {
  x = setInterval(function(){ 
      sound1Elapsed ++;
      var timeline = (200 * (sound1Elapsed/s1Dur));
      var timelineNeg = (200 - timeline);
      if(sound1Elapsed < s1Dur){
      document.getElementById("pBar1").style.width= timeline + "px";
      document.getElementById("pBar1Neg").style.width= timelineNeg + "px";
      document.getElementById("time1").style.marginLeft= (85 + timeline + "px");

      var minutes = Math.floor(sound1Elapsed / 60);
      var seconds = Math.floor(sound1Elapsed % 60);
      if(minutes < 10 && seconds < 10)
      {
      document.getElementById("time1").innerText= "0" + minutes + ":0" + seconds; 
      }else if(minutes < 10)
      {
      document.getElementById("time1").innerText= "0" + minutes + ":" + seconds;   
      }else if(seconds < 10)
      {
      document.getElementById("time1").innerText= minutes + ":0" + seconds;
      }else
      {
      document.getElementById("time1").innerText= minutes + ":" + seconds;   
      }
  }
  }, 1000);
}

function movePlayhead2() {
  y = setInterval(function(){ 
      sound2Elapsed ++;
      var timeline = (200 * (sound2Elapsed/s2Dur));
      var timelineNeg = (200 - timeline);
      if(sound2Elapsed < s2Dur){
      document.getElementById("pBar2").style.width= timeline + "px";
      document.getElementById("pBar2Neg").style.width= timelineNeg + "px";
      document.getElementById("time2").style.marginLeft= (85 + timeline + "px");

      var minutes = Math.floor(sound2Elapsed / 60);
      var seconds = Math.floor(sound2Elapsed % 60);
      if(minutes < 10 && seconds < 10)
      {
      document.getElementById("time2").innerText= "0" + minutes + ":0" + seconds; 
      }else if(minutes < 10)
      {
      document.getElementById("time2").innerText= "0" + minutes + ":" + seconds;   
      }else if(seconds < 10)
      {
      document.getElementById("time2").innerText= minutes + ":0" + seconds;
      }else
      {
      document.getElementById("time2").innerText= minutes + ":" + seconds;   
      }
  }
  }, 1000);
}

function movePlayhead3() {
  z = setInterval(function(){ 
      sound3Elapsed ++;
      var timeline = (200 * (sound3Elapsed/s3Dur));
      var timelineNeg = (200 - timeline);
      if(sound3Elapsed < s3Dur){
      document.getElementById("pBar3").style.width= timeline + "px";
      document.getElementById("pBar3Neg").style.width= timelineNeg + "px";
      document.getElementById("time3").style.marginLeft= (85 + timeline + "px");

      var minutes = Math.floor(sound3Elapsed / 60);
      var seconds = Math.floor(sound3Elapsed % 60);
      if(minutes < 10 && seconds < 10)
      {
      document.getElementById("time3").innerText= "0" + minutes + ":0" + seconds; 
      }else if(minutes < 10)
      {
      document.getElementById("time3").innerText= "0" + minutes + ":" + seconds;   
      }else if(seconds < 10)
      {
      document.getElementById("time3").innerText= minutes + ":0" + seconds;
      }else
      {
      document.getElementById("time3").innerText= minutes + ":" + seconds;   
      }
  }
  }, 1000);
}

function playheadCall(){
    clearInterval(x);
    clearInterval(y);
    clearInterval(z);
    sound1.pause();
    sound2.pause();
    sound3.pause();
}
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
    let RecordName1 = "Record 1";
    let RecordURLCheck1 = null;
    let RecordName2 = "Record 2";
    let RecordURLCheck2 = null;
    let RecordName3 = "Record 3";
    let RecordURLCheck3 = null;

//RANDOMIZER
var arr = [];
if(records.length < 3)
{
    document.getElementById("alertBox1").style.height="25px";
}else{
    while(arr.length < 3){
        var r = Math.floor(Math.random() * records.length-1) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
result1 = arr[0];
RecordName1 = records[result1].getCellValue('Name');
RecordURLCheck1 = records[result1].getCellValue('Audio Preview');
result2 = arr[1];
RecordName2 = records[result2].getCellValue('Name');
RecordURLCheck2 = records[result2].getCellValue('Audio Preview');
result3 = arr[2];
RecordName3 = records[result3].getCellValue('Name');
RecordURLCheck3 = records[result3].getCellValue('Audio Preview');
}

//FIRST RECORD

    if(RecordURLCheck1 != null){
    let RecordURL1 = records[result1].getCellValue('Audio Preview')[0].url;
    var sound1 = new Howl({
         src: [RecordURL1],
         onload: function(){s1Load();}
    });
    }else{
    var sound1 = new Howl({
        src: ['https://dl.airtable.com/.attachments/146c4d53cc0da39a9288efcb2c3ba580/49a7d99c/unsure.mp3']
     });
	}

    function s1Load(){
     s1Dur = sound1._duration;
     document.getElementById("LoadBox").style.height =0;
     document.getElementById("Play1").style.backgroundColor="#66996666";
     document.getElementById("Stop1").style.backgroundColor="#ffffff00";
     document.getElementById("ShowName1").style.backgroundColor="#66996666";
     document.getElementById("Play1").style.color="#ffffff";
     document.getElementById("Stop1").style.color="#66996666";
     document.getElementById("ShowName1").style.color="#ffffff";
     document.getElementById("SongBox1").style.height ="100px";

      var minutesDur1 = Math.floor(s1Dur / 60);
      var secondsDur1 = Math.floor(s1Dur % 60);
      if(minutesDur1 < 10 && secondsDur1 < 10)
      {
      document.getElementById("duration1").innerText= " / 0" + minutesDur1 + ":0" + secondsDur1; 
      }else if(minutesDur1 < 10)
      {
      document.getElementById("duration1").innerText= " / 0" + minutesDur1 + ":" + secondsDur1;   
      }else if(secondsDur1 < 10)
      {
      document.getElementById("duration1").innerText= " / " + minutesDur1 + ":0" + secondsDur1;
      }else
      {
      document.getElementById("duration1").innerText= " / " + minutesDur1 + ":" + secondsDur1;   
      }

	}

    function B1Reveal(){
        document.getElementById("nameLabel1").innerText = RecordName1;
        document.getElementById("ShowName1").disabled = true;
        document.getElementById("ShowName1").style.backgroundColor="#ffffff00";
        document.getElementById("ShowName1").style.color="#66996666";
	}

    function B1Stop(){
        sound1.stop();
        document.getElementById("Play1").disabled = false;
        clearInterval(x);
        sound1Elapsed = 0;
        document.getElementById("pBar1").style.width= "1px";
        document.getElementById("pBar1Neg").style.width= "199px";
        document.getElementById("time1").style.marginLeft="85px";
        document.getElementById("time1").innerText="00:00";  
        document.getElementById("Stop1").disabled = true;
        document.getElementById("Play1").disabled = false;
        document.getElementById("Stop1").style.backgroundColor="#ffffff00";
        document.getElementById("Stop1").style.color="#669966";   
        document.getElementById("Play1").style.backgroundColor="#66996666";
        document.getElementById("Play1").style.color="#ffffff";         
	}

    function B1Play(){
        playheadCall();
        sound1.play();
        document.getElementById("Play1").disabled = true;
        document.getElementById("Stop1").disabled = false;
        document.getElementById("Play2").disabled = false;
        document.getElementById("Play3").disabled = false;
        document.getElementById("Play1").style.backgroundColor="#ffffff00";
        document.getElementById("Play1").style.color="#669966";
        document.getElementById("Stop1").style.backgroundColor="#66996666";
        document.getElementById("Stop1").style.color="#ffffff";
        document.getElementById("Play2").style.backgroundColor="#66999966";
        document.getElementById("Play2").style.color="#ffffff";
        document.getElementById("Play3").style.backgroundColor="#99996666";
        document.getElementById("Play3").style.color="#ffffff";
        movePlayhead1();
	}

    function B1Pause(){
        sound1.pause();
        document.getElementById("Play1").disabled = false;
        clearInterval(x);        
        document.getElementById("Play1").style.backgroundColor="#66996666";
        document.getElementById("Play1").style.color="#ffffff";
	}

    function Playhead1(){

       if(event.clientX < 300 && event.clientX > 100)
       {
            playheadCall();
            var pHead = (((event.clientX - 100) / 200) * s1Dur);
            sound1.stop();
            movePlayhead1();
            sound1.seek(pHead);
            sound1.play();
            document.getElementById("Play1").disabled = true;
            document.getElementById("Stop1").disabled = false;
            document.getElementById("Play2").disabled = false;
            document.getElementById("Play3").disabled = false;
            sound1Elapsed = pHead;
            document.getElementById("Play1").style.backgroundColor="#ffffff00";
            document.getElementById("Play1").style.color="#669966";
            document.getElementById("Stop1").style.backgroundColor="#66996666";
            document.getElementById("Stop1").style.color="#ffffff"; 
            document.getElementById("Play2").style.backgroundColor="#66999966";
            document.getElementById("Play2").style.color="#ffffff";
            document.getElementById("Play3").style.backgroundColor="#99996666";
            document.getElementById("Play3").style.color="#ffffff";           
	   }
	}


//SECOND RECORD

    if(RecordURLCheck2 != null){
    let RecordURL2 = records[result2].getCellValue('Audio Preview')[0].url;
    var sound2 = new Howl({
         src: [RecordURL2],
         onload: function(){s2Load();}
    });
    }else{
    var sound2 = new Howl({
        src: ['https://dl.airtable.com/.attachments/146c4d53cc0da39a9288efcb2c3ba580/49a7d99c/unsure.mp3']
     });
	}	

    function s2Load(){
     s2Dur = sound2._duration;
     document.getElementById("LoadBox").style.height =0;
     document.getElementById("SongBox2").style.height ="100px";
     document.getElementById("Play2").style.backgroundColor="#66999966";
     document.getElementById("Stop2").style.backgroundColor="#ffffff00";
     document.getElementById("ShowName2").style.backgroundColor="#66999966";
     document.getElementById("Play2").style.color="#ffffff";
     document.getElementById("Stop2").style.color="#66999966";
     document.getElementById("ShowName2").style.color="#ffffff";


      var minutesDur2 = Math.floor(s2Dur / 60);
      var secondsDur2 = Math.floor(s2Dur % 60);
      if(minutesDur2 < 10 && secondsDur2 < 10)
      {
      document.getElementById("duration2").innerText= " / 0" + minutesDur2 + ":0" + secondsDur2; 
      }else if(minutesDur2 < 10)
      {
      document.getElementById("duration2").innerText= " / 0" + minutesDur2 + ":" + secondsDur2;   
      }else if(secondsDur2 < 10)
      {
      document.getElementById("duration2").innerText= " / " + minutesDur2 + ":0" + secondsDur2;
      }else
      {
      document.getElementById("duration2").innerText= " / " + minutesDur2 + ":" + secondsDur2;   
      }

	}

    function B2Reveal(){
        document.getElementById("nameLabel2").innerText = RecordName2;
        document.getElementById("ShowName2").disabled = true;
        document.getElementById("ShowName2").style.backgroundColor="#ffffff00";
        document.getElementById("ShowName2").style.color="#66999966";
	}

    function B2Stop(){
        sound2.stop();
        clearInterval(y);
        sound2Elapsed = 0;
        document.getElementById("Stop2").disabled = true;
        document.getElementById("Play2").disabled = false;
        document.getElementById("pBar2").style.width= "1px";
        document.getElementById("pBar2Neg").style.width= "199px";
        document.getElementById("time2").style.marginLeft="85px";
        document.getElementById("time2").innerText="00:00";   
        document.getElementById("Stop2").style.backgroundColor="#ffffff00";
        document.getElementById("Stop2").style.color="#669999";   
        document.getElementById("Play2").style.backgroundColor="#66999966";
        document.getElementById("Play2").style.color="#ffffff";
	}

    function B2Play(){
        playheadCall();
        sound2.play();
        movePlayhead2();
        document.getElementById("Play2").disabled = true;
        document.getElementById("Stop2").disabled = false;
        document.getElementById("Play2").style.backgroundColor="#ffffff00";
        document.getElementById("Play2").style.color="#669999";
        document.getElementById("Stop2").style.backgroundColor="#66999966";
        document.getElementById("Stop2").style.color="#ffffff";
        document.getElementById("Play1").disabled = false;
        document.getElementById("Play3").disabled = false;
        document.getElementById("Play1").style.backgroundColor="#66996666";
        document.getElementById("Play1").style.color="#ffffff";
        document.getElementById("Play3").style.backgroundColor="#99996666";
        document.getElementById("Play3").style.color="#ffffff";
	}

    function B2Pause(){
        sound2.pause();
        clearInterval(y);
        document.getElementById("Play2").disabled = false;
        document.getElementById("Play2").style.backgroundColor="#66999966";
        document.getElementById("Play2").style.color="#ffffff";
	}     

    function Playhead2(){

       if(event.clientX < 300 && event.clientX > 100 && event.clientY > 100 && event.clientY < 200)
       {
            playheadCall();
            var pHead = (((event.clientX - 100) / 200) * s2Dur);
            sound2.stop();
            movePlayhead2();
            sound2.seek(pHead);
            sound2.play();
            document.getElementById("Play2").disabled = true;
            document.getElementById("Stop2").disabled = false;
            sound2Elapsed = pHead;
            document.getElementById("Play2").style.backgroundColor="#ffffff00";
            document.getElementById("Play2").style.color="#669999";
            document.getElementById("Stop2").style.backgroundColor="#66999966";
            document.getElementById("Stop2").style.color="#ffffff";
            document.getElementById("Play1").disabled = false;
            document.getElementById("Play3").disabled = false;
            document.getElementById("Play1").style.backgroundColor="#66996666";
            document.getElementById("Play1").style.color="#ffffff";
            document.getElementById("Play3").style.backgroundColor="#99996666";
            document.getElementById("Play3").style.color="#ffffff";
            
	   }
	}

//THIRD RECORD

    if(RecordURLCheck3 != null){
    let RecordURL3 = records[result3].getCellValue('Audio Preview')[0].url;
    var sound3 = new Howl({
         src: [RecordURL3],
         onload: function(){s3Load();}
    });
    }else{
    var sound3 = new Howl({
        src: ['https://dl.airtable.com/.attachments/146c4d53cc0da39a9288efcb2c3ba580/49a7d99c/unsure.mp3']
     });
	}	

    function s3Load(){
     s3Dur = sound3._duration;
     document.getElementById("LoadBox").style.height =0;
     document.getElementById("SongBox3").style.height ="100px";
     document.getElementById("Play3").style.backgroundColor="#99996666";
     document.getElementById("Stop3").style.backgroundColor="#ffffff00";
     document.getElementById("ShowName3").style.backgroundColor="#99996666";
     document.getElementById("Play3").style.color="#ffffff";
     document.getElementById("Stop3").style.color="#99996666";
     document.getElementById("ShowName3").style.color="#ffffff";

      var minutesDur3 = Math.floor(s3Dur / 60);
      var secondsDur3 = Math.floor(s3Dur % 60);
      if(minutesDur3 < 10 && secondsDur3 < 10)
      {
      document.getElementById("duration3").innerText= " / 0" + minutesDur3 + ":0" + secondsDur3; 
      }else if(minutesDur3 < 10)
      {
      document.getElementById("duration3").innerText= " / 0" + minutesDur3 + ":" + secondsDur3;   
      }else if(secondsDur3 < 10)
      {
      document.getElementById("duration3").innerText= " / " + minutesDur3 + ":0" + secondsDur3;
      }else
      {
      document.getElementById("duration3").innerText= " / " + minutesDur3 + ":" + secondsDur3;   
      }
	}

    function B3Reveal(){
        document.getElementById("nameLabel3").innerText = RecordName3;
        document.getElementById("ShowName3").disabled = true;
        document.getElementById("ShowName3").style.backgroundColor="#ffffff00";
        document.getElementById("ShowName3").style.color="#99996666";
	}

    function B3Stop(){
        sound3.stop();
        clearInterval(z);
        sound3Elapsed = 0;
        document.getElementById("pBar3").style.width= "1px";
        document.getElementById("pBar3Neg").style.width= "199px";
        document.getElementById("time3").style.marginLeft="85px";
        document.getElementById("time3").innerText="00:00";
        document.getElementById("Stop3").disabled = true;
        document.getElementById("Play3").disabled = false;  
        document.getElementById("Stop3").style.backgroundColor="#ffffff00";
        document.getElementById("Stop3").style.color="#999966";   
        document.getElementById("Play3").style.backgroundColor="#99996666";
        document.getElementById("Play3").style.color="#ffffff";
	}

    function B3Play(){
        playheadCall();
        sound3.play();
        document.getElementById("Play3").disabled = true;
        document.getElementById("Stop3").disabled = false;
        movePlayhead3();
        document.getElementById("Play3").style.backgroundColor="#ffffff00";
        document.getElementById("Play3").style.color="#999966";
        document.getElementById("Stop3").style.backgroundColor="#99996666";
        document.getElementById("Stop3").style.color="#ffffff";
        document.getElementById("Play1").disabled = false;
        document.getElementById("Play2").disabled = false;
        document.getElementById("Play2").style.backgroundColor="#66999966";
        document.getElementById("Play2").style.color="#ffffff";
        document.getElementById("Play1").style.backgroundColor="#66996666";
        document.getElementById("Play1").style.color="#ffffff";
	}

    function B3Pause(){
        sound3.pause();
        clearInterval(z);
        document.getElementById("Play3").disabled = false;
        document.getElementById("Play3").style.backgroundColor="#99996666";
        document.getElementById("Play3").style.color="#ffffff";
	}     

    function Playhead3(){

       if(event.clientX < 300 && event.clientX > 100 && event.clientY > 200 && event.clientY < 300)
       {
            playheadCall();
            var pHead = (((event.clientX - 100) / 200) * s3Dur);
            sound3.stop();
            movePlayhead3();
            sound3.seek(pHead);
            sound3.play();
            document.getElementById("Play3").disabled = true;
            document.getElementById("Stop3").disabled = false;
            sound3Elapsed = pHead;
            document.getElementById("Play3").style.backgroundColor="#ffffff00";
            document.getElementById("Play3").style.color="#999966";
            document.getElementById("Stop3").style.backgroundColor="#99996666";
            document.getElementById("Stop3").style.color="#ffffff";    
            document.getElementById("Play1").disabled = false;
            document.getElementById("Play2").disabled = false;
            document.getElementById("Play2").style.backgroundColor="#66999966";
            document.getElementById("Play2").style.color="#ffffff";
            document.getElementById("Play1").style.backgroundColor="#66996666";
            document.getElementById("Play1").style.color="#ffffff";         
	   }
	}


    function viewChanged()
    {
        document.getElementById("alertBox1").style.height ="0px";
        document.getElementById("SongBox1").style.height ="0px";
        document.getElementById("SongBox2").style.height ="0px";
        document.getElementById("SongBox3").style.height ="0px";
        document.getElementById("nameLabel1").innerText = "";
        document.getElementById("nameLabel2").innerText = "";
        document.getElementById("nameLabel3").innerText = "";
        B1Stop();
        B2Stop();
        B3Stop();
	}


//LAYOUT TO DISPLAY

const boxExample = (
<Box>   

    <Box
        id="ViewBox"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="greenLight2"
        paddingX={4}
        width={400}
        height={50}
        overflow="auto"
      >
        <ViewPicker
          table={table}
          view={myView}
          onChange={newView => setView(newView) + viewChanged()}
          width="200px"
        />
    </Box>

    <Box
        id="LoadBox"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="greenLight2"
        paddingX={4}
        width={400}
        height={200}
        overflow="auto"
      >
        <Loader scale={0.3} />;
    </Box>


    <Box
        id="alertBox1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#cc000033"
        width={400}
        height={0}
        overflow="hidden"
    > 
        <Label id="alertLabel1" height={10} >This View doesn't have 3 records</Label>
    </Box>


    <Box
    id="SongBox1"
    overflow="auto"
    width={400}
    height={0}
    >
          <Box
            id="NameBox1"
            display="flex"
            justifyContent="center"
            backgroundColor="greenLight2"
            width={400}
            height={15}
            overflow="hidden"
          > 
            <Label id="nameLabel1" height={10} ></Label>
          </Box>
          <Box
            id="TimeBox1"
            display="flex"
            backgroundColor="greenLight2"
            width={400}
            height={15}
            overflow="hidden"
          > 
            <Label id="time1" textColor="#669966cc" height={10} marginLeft={"85px"}>00:00</Label>
            <Label id="duration1" textColor="#669966cc" height={10} ></Label>
          </Box>
          <Box
            id="Box1"
            onClick={() => Playhead1()}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="greenLight2"
            paddingX={4}
            width={400}
            height={20}
            overflow="auto"
          >      
          <Box
            id="pBar1"
            display="flex"
            borderRadius="10px"
            backgroundColor="#66996666"
            width={pBar1Width}
            height={10}
            overflow="auto"
          >
          </Box>      
          <Box
            id="pBar1Neg"
            display="flex"
            backgroundColor="#ffffffcc"
            width={200-pBar1Width}
            height={10}
            overflow="auto"
          >
          </Box>
          </Box>
          <Box
            id="ButtonBox1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="greenLight2"
            padding={1}
            width={400}
            height={50}
            overflow="auto"
          >
            <Button id="Play1" icon="play"  margin={1} onClick={() => sound1.playing() ? B1Pause() : B1Play()} >
                Play
            </Button>
            <Button id="Stop1" icon="redo" margin={1} onClick={() => B1Stop()}>
                Stop
            </Button>
            <Button id="ShowName1" icon="show1" margin={1} onClick={() => B1Reveal()} >
                Reveal Name
            </Button>
            </Box>
    </Box>

    <Box
    id="SongBox2"
    overflow="auto"
    width={400}
    height={0}
    >

        <Box
            id="NameBox2"
            display="flex"
            justifyContent="center"
            backgroundColor="tealLight2"
            width={400}
            height={15}
            overflow="hidden"
        > 
            <Label id="nameLabel2" height={10} ></Label>
        </Box>
          
        <Box
            id="TimeBox2"
            display="flex"
            backgroundColor="tealLight2"
            width={400}
            height={15}
            overflow="hidden"
        > 
            <Label id="time2" textColor="#669999cc" height={10} marginLeft={"85px"}>00:00</Label>
            <Label id="duration2" textColor="#669999cc" height={10} ></Label>
        </Box>
        
        <Box
            id="Box2"
            onClick={() => Playhead2()}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="tealLight2"
            paddingX={4}
            width={400}
            height={20}
            overflow="auto"
          >      
        <Box
            id="pBar2"
            display="flex"
            borderRadius="10px"
            backgroundColor="#66999966"
            width={pBar1Width}
            height={10}
            overflow="auto"
        >
        </Box>      
        <Box
            id="pBar2Neg"
            display="flex"
            backgroundColor="#ffffffcc"
            width={200-pBar1Width}
            height={10}
            overflow="auto"
        >
        </Box>
        </Box>
        <Box
            id="ButtonBox2"
            display="flex"
            justifyContent="center"
            backgroundColor="tealLight2"
            padding={1}
            width={400}
            height={50}
            overflow="auto"
        >
            <Button id="Play2" icon="play" margin={1} onClick={() => sound2.playing() ? B2Pause() : B2Play()} >
            Play
            </Button>
            <Button id="Stop2" icon="redo" margin={1} onClick={() => B2Stop()}>
                Stop
            </Button>
            <Button id="ShowName2" icon="show1" margin={1} onClick={() => B2Reveal()} >
                Reveal Name
            </Button>
        </Box>

    </Box>

    <Box
    id="SongBox3"
    overflow="auto"
    width={400}
    height={0}
    >

        <Box
            id="NameBox3"
            display="flex"
            justifyContent="center"
            backgroundColor="yellowLight2"
            width={400}
            height={15}
            overflow="hidden"
        > 
            <Label id="nameLabel3" height={10} ></Label>
        </Box>
          
        <Box
            id="TimeBox3"
            display="flex"
            backgroundColor="yellowLight2"
            width={400}
            height={15}
            overflow="hidden"
        > 
            <Label id="time3" textColor="#999966cc" height={10} marginLeft={"85px"}>00:00</Label>
            <Label id="duration3" textColor="#999966cc" height={10} ></Label>
        </Box>
        
        <Box
            id="Box3"
            onClick={() => Playhead3()}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="yellowLight2"
            paddingX={4}
            width={400}
            height={20}
            overflow="auto"
          >      
        <Box
            id="pBar3"
            display="flex"
            borderRadius="10px"
            backgroundColor="#99996666"
            width={pBar1Width}
            height={10}
            overflow="auto"
        >
        </Box>      
        <Box
            id="pBar3Neg"
            display="flex"
            backgroundColor="#ffffffcc"
            width={200-pBar1Width}
            height={10}
            overflow="auto"
        >
        </Box>
        </Box>
 
        <Box
            id="ButtonBox3"
            display="flex"
            justifyContent="center"
            backgroundColor="yellowLight2"
            padding={1}
            width={400}
            height={50}
            overflow="auto"
        >
            <Button id="Play3" icon="play" margin={1} onClick={() => sound3.playing() ? B3Pause() : B3Play()} >
            Play
            </Button>
            <Button id="Stop3" icon="redo" margin={1} onClick={() => B3Stop()}>
                Stop
            </Button>
            <Button id="ShowName3" icon="show1" margin={1} onClick={() => B3Reveal()} >
                Reveal Name
            </Button>
        </Box>

    </Box>
</Box>
    );

return boxExample;    

} 

initializeBlock(() => <HelloWorldBlock />);

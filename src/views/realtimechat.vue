<template>
  <!-- <span
    id="blackOverlay"
    class=" w-full h-full absolute opacity-75 bg-black"
  ></span> -->
  <div class=" px-4 py-24 bg-opacity-75 bg-black">
    <div class=" top-0 -mb-4" >
    <img @click="ToHome()" class=" justify-center items-center absolute w-24 -top-2 left-1/2 -ml-28 cursor-pointer " src="@/assets/img/logo.png" >
  <h3 @click="ToHome()" class=" justify-center items-center absolute w-24 top-8 left-1/2 -ml-8 cursor-pointer text-white font-bold  ">TweetyChat</h3>
  <!-- w-fit flex  cursor-pointer absolute justify-center ml-735px text-center pb-5 text-white font-bold -mt-16 -->

</div>

  <div class="messaging ">
        <div class="clear-both overflow-hidden rounded border-3 h-720px border-white shadow-neon-white  border-solid ">
          <div class="inbox_people ">
            <div class="headind_srch">
              <div class="recent_heading">
                <h4>Recent</h4>
              </div>
              <div class="srch_bar">
                <div class="stylish-input-group">
                  <input type="text" class="search-bar"  placeholder="Search" >
                  <span class="input-group-addon">
                  <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                  </span> </div>
              </div>
            </div>
            <div class="inbox_chat">
              <div @click="active=!active ; scrollToBottom()"  :class="[!active?' chat_list cursor-pointer ':'chat_list active_chat cursor-pointer']">
                <div class="chat_people">
                  <div class="chat_img  "> <img class="rounded-full " src="@/assets/img/uffuff.jpg" alt="sunil"> </div>
                  <div  class="chat_ib">
                    <h class=" text-lg font-medium" >Uff Uff returns</h>
                    <p class=" text-sm mt-1 font-extralight" v-for="lastmessage in lastmessages" >{{lastmessage.message}}</p>
                  </div>
                </div>
              </div>

              <!-- <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions
                      astrology under one roof.</p>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div v-if="!active" > <img class="w-3/5 h-720px" src="@/assets/img/default.jpg" > </div>
          <div v-show="active" class="mesgs">
            <div class="msg_history  ">
              <div v-for="message in messages" >
                <div  :class="[message.author==authUser.displayName?' sent_msg ':'received_withd_msg']">
                    <p>{{message.message}}</p>
                    <span class="time_date">{{message.author}},{{message.createdHours}}:{{message.createdMinutes}}</span>
                </div>
              </div>

            </div>
            <div class="type_msg">
                <input  @keyup.enter="SaveMessage" v-model="message" type="text" class="text-white font-bold  bg-transparent w-full h-full py-3 pl-3 text-base" placeholder="Type a message" />
                <button @click="SaveMessage" class="msg_send_btn   text-white font-bold uppercase rounded-full items-center justify-center inline-flex " type="button"><i >send</i></button>
            </div>
          </div>
        </div>
      </div></div>
      <div id="adsgoeshere" style="background: #1d1f29; padding-top:60px; text-align: center;" v-html="adsenseContent"></div>
      <FooterComponent/>
  </template>
  <script>

    import FooterComponent from "../components/Footer.vue";
    import firebase from 'firebase';
  export default {
    name: 'realtimechat',
    components: {
      FooterComponent
    },
    data(){
       return {
        adsenseContent: '',
        active: false,
        message:null,
        messages:[],
        authUser:[],
        lastmessage:null,
        lastmessages:[],
       }

    },
    mounted(){
      this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
    },
    methods:{
      ToHome(){
        this.$router.push('/')
      }
      ,

      scrollToBottom(){
        setTimeout(() => {
          let box=document.querySelector('.msg_history');
         box.scrollTop=box.scrollHeight;

          },500);

      },
      SaveMessage(){
       if(this.message.trim()){
         db.collection('chat').add({
             message:this.message,
             createdAt: new Date(),
             createdHours: new Date().getHours(),
             createdMinutes: new Date().getMinutes(),
             author:this.authUser.displayName
         }).then(()=>{
          this.scrollToBottom();
         })
        }
         this.message=null;
      },

      fetchMessages(){
        db.collection('chat').orderBy('createdAt').onSnapshot((querySnapshot) => {
          let allMessages=[];
          querySnapshot.forEach(doc => {
          allMessages.push(doc.data())
      })

          this.messages=allMessages;

          setTimeout(() => {
            this.scrollToBottom();

          },1000);
  })
      },
      fetchLastMessage(){
        db.collection('chat').orderBy("createdAt","desc").limit(1).onSnapshot((querySnapshot) => {
          let allLastmessages=[];
          querySnapshot.forEach(doc => {
          allLastmessages.push(doc.data())
      })
          this.lastmessages=allLastmessages

  })
      },
    },
    created(){

      firebase.auth().onAuthStateChanged(user=>{
              if(user){
                this.authUser=user
              }else{
                this.authUser=[]
              }
            })

      this.fetchMessages();
      this.fetchLastMessage();
    },
    beforeRouteEnter(to,from,next) {

    next(vm=>{
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        next();
      }else{
        vm.$router.push('/login')
      }
    })
    })
    }



  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container{
    max-width:1170px;
     margin:auto;

     padding-top: 200px;

  }
  img{ max-width:100%;}
  .inbox_people {
    background: white;
    float: left;
    overflow: hidden;
    width: 40%; border-right:1px solid #c4c4c4;
    height: inherit;

  }

  .top_spac{ margin: 20px 0 0;}


  .recent_heading {float: left; width:40%; cursor: default; }
  .srch_bar {
    display: inline-block;
    text-align: right;
    width: 60%;
  }
  .headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

  .recent_heading h4 {
    color: black;
    font-size: 21px;
    margin: auto;
  }
  .srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
  .srch_bar .input-group-addon button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
    padding: 0;
    color: #707070;
    font-size: 18px;
  }
  .srch_bar .input-group-addon { margin: 0 0 0 -27px;}


  .chat_img {
    float: left;
    width: 11%;

  }
  .chat_ib {
    float: left;
    padding: 0 0 0 15px;
    width: 88%;
  }

  .chat_people{ overflow:hidden; clear:both;}
  .chat_list {
    border-bottom: 1px solid #c4c4c4;
    margin: 0;
    padding: 18px 16px 10px;
  }
  .inbox_chat { height: 550px; overflow-y: scroll;}

  .active_chat{ background:#ebebeb;}

  .incoming_msg_img {
    display: inline-block;
    width: 6%;
  }
  /* .received_msg {
    display: inline-block;
    padding: 0 0 0 10px;
    vertical-align: top;
    width: 92%;
   } */
   .received_withd_msg p {
    background: #ebebeb none repeat scroll 0 0;
    font-weight: bold;
    border-radius: 3px;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px 5px 12px;
    width: 60%;
  }
  .time_date {
    color: #747474;
    display: block;
    font-size: 12px;
    margin: 8px 0 0;
  }
  .received_withd_msg {float: left; width: 92%;}
  .mesgs {
    float: left;
    padding: 30px 15px 0 25px;
    width: 60%;
  }

   .sent_msg p {
    background: #fffb13 none repeat scroll 0 0;
    font-weight: bold;
    border-radius: 3px;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px 5px 12px;
    width: 60%;

  }
  .outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
  .sent_msg {
    float: right; width: 92%;
    margin-right: -300px;

  }

  .type_msg {border-top: 1px solid #c4c4c4;position: relative; max-height: 500px;}
  .msg_send_btn {

    background-color: #757575;
    font-size: 17px;
    height: 33px;
    position: absolute;
    right: 0;
    top: 11px;
    width: 33px;
  }
  .messaging { padding: 0 0 50px 0;}
  .msg_history {
    height: 630px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  </style>

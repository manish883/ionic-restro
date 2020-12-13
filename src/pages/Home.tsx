import { 
  IonButton,  IonContent, 
  IonHeader, IonLabel, 
  IonPage, IonTitle, 
  IonToggle, IonToolbar ,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
  IonCard, IonCardHeader, IonCardSubtitle, 
  IonCardTitle, IonCardContent, IonItem,
   IonIcon,IonInput} from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [h,setH] = useState("hello");
  const [email,setEMail] = useState("Enter Input");
  const [password,setPassword] = useState("Enter Password");
  const [b,setB] = useState(true);
  const [l,setL] =useState(false);
  
  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter event fired');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave event fired');
  });

  useIonViewWillEnter(() => {
// setTimeout(()=>{
//   setL(true);
// },10000);
    console.log('ionViewWillEnter event fired');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave event fired');
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* {
        l ?( */}
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{b ? "ON":"OFF"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonToggle checked={b} onIonChange={()=>{  
          setB(!b);
          console.log(b);
          
        }}>toggle </IonToggle>
        <IonLabel>{h}</IonLabel>
        <IonButton onClick={()=>{
           setH("value change") ;
          }
        } >Click</IonButton> */}
 <IonCard>
          <IonCardHeader>
            
            <IonCardTitle>Login</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <form>
          <IonItem>
            <IonInput type="text" value={email} onIonChange={e => setEMail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
	  </form>
    <IonButton shape="round" color="success" expand="block"  onClick={()=>{
      console.log(email);
      console.log(password);
      
    }
     } routerLink="/order">Login </IonButton>
     <IonLabel >or</IonLabel>
    <IonButton shape="round" color="success" expand="block" routerLink="/registration">Register Now</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>)
      {/* :
            (<h1>loading</h1>)
            
} */}

    </IonPage>
  );
};

export default Home;

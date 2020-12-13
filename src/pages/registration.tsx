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
     IonIcon,IonInput,IonBackButton,IonButtons,IonMenuButton} from '@ionic/react';
  import React, { useState } from 'react';
  import ExploreContainer from '../components/ExploreContainer';
  
  
  const Registration: React.FC = () => {
  
    const [email,setEMail] = useState("Enter Email");
    const [password,setPassword] = useState("Enter Password");
    const [reEnterPassword,setReEnterPassword] = useState("Enter Password");
    const [restroName,setRestroName] = useState("Enter Restaurent Name");
    const [ContactNumber,setNumber] = useState("Enter Contact Number");
     
    useIonViewDidEnter(() => {
      console.log('ionViewDidEnter event fired');
    });
  
    useIonViewDidLeave(() => {
      console.log('ionViewDidLeave event fired');
    });
  
    useIonViewWillEnter(() => {
  
      console.log('ionViewWillEnter event fired');
    });
  
    useIonViewWillLeave(() => {
      console.log('ionViewWillLeave event fired');
    });
  
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
          
          <IonBackButton text=""  color="primary"/>
        </IonButtons>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent fullscreen>
          
   <IonCard>
            <IonCardHeader>
              
              <IonCardTitle>Register Here</IonCardTitle>
            </IonCardHeader>
  
            <IonCardContent>
            <form>
            <IonItem>
              <IonInput type="text" value={email} onIonChange={e => setEMail(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
              <IonInput type="password" value={reEnterPassword} onIonChange={e => setReEnterPassword(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
              <IonInput type="text" value={restroName} onIonChange={e => setRestroName(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
              <IonInput type="text" value={ContactNumber} onIonChange={e => setNumber(e.detail.value!)}></IonInput>
            </IonItem>
        </form>
      <IonButton shape="round" color="success" expand="block" >Register</IonButton>
      <IonLabel>Already have an account?<a href="/home">Signin</a></IonLabel>


        </IonCardContent>
          </IonCard>
        </IonContent>)
  
      </IonPage>
    );
  };
  
  export default Registration;
  
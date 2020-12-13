import { 
    IonButton,  IonContent, 
    IonHeader, IonLabel, 
    IonPage, IonTitle, 
    IonToggle, IonToolbar ,
    IonCard, IonCardHeader, IonCardSubtitle, 
    IonCardTitle, IonCardContent, IonItem,
     IonIcon,IonInput,IonBackButton,IonButtons,
     IonMenuButton,IonMenu,IonList,IonRouterOutlet} from '@ionic/react';
  import React, { useState } from 'react';
  import ExploreContainer from '../components/ExploreContainer';
  
  const Order: React.FC = () => {
    
  
    return (
        <>
        <IonMenu side="start" menuId="first" contentId="main">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Start Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
      </IonList>
    </IonContent>
    </IonMenu>
       <IonRouterOutlet></IonRouterOutlet>
       </>
    );
  };
  
  export default Order;
  
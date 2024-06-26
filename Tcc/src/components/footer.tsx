import { IonFooter, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { home, person, wallet } from 'ionicons/icons';
import '../Css/footer.css';
import Invest from '../../public/img.png'; 

const Footer: React.FC = () => (
  <IonFooter>
    <IonToolbar className='ion-toolbar'>
      <div className='icon-wrapper'>
        <IonButton routerLink="/home" className='icon-button'
         style={{ '--background': 'black', '--color': '#131313', '--border': 'none' }}>
          <IonIcon icon={home} size="large" className='icon' />
        </IonButton>
        <IonButton routerLink="/UltTrans" className='icon-button'
        style={{ '--background': 'black', '--color': '#131313', '--border': 'none' }}>
          <IonIcon icon={wallet} size="large" className='icon' />
        </IonButton>
        <IonButton routerLink="/Invest" className='icon-button'
        style={{ '--background': 'black', '--color': '#131313', '--border': 'none' }}>
          <img src={Invest} alt="Invest" className='icon' style={{ width: '42px', height: '42px' }} />
        </IonButton>
        <IonButton routerLink="/Profile" className='icon-button'
        style={{ '--background': 'black', '--color': '#131313', '--border': 'none' }}>
          <IonIcon icon={person} size="large" className='icon' />
        </IonButton>
      </div>
    </IonToolbar>
  </IonFooter>
);

export default Footer;

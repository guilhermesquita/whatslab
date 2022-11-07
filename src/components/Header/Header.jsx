import Video from '../../assets/Video.svg'
import Call from '../../assets/Call.svg'
import hambuger from '../../assets/hambuger.svg'
import { Cab, Info, InfoText, Online, Icons, ImgProfile  } from './style';

export default function Header() {
    return (
      <Cab>
        <Info>
          <ImgProfile src='https://picsum.photos/200/300' alt='ima' height={'40px'} width={'40px'}/>
          <InfoText>
            <h4>Gui</h4>
            <Online>online</Online>
          </InfoText>
        </Info>

        <Icons>
          <img src={Video} alt='' height={'20px'}/>
          <img src={Call} alt='' height={'20px'}/>
          <img src={hambuger} alt='' height={'5px'}/>
        </Icons>
      </Cab>
    );
  }
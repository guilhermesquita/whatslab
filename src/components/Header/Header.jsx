import Video from '../../assets/Video.svg'
import Call from '../../assets/Call.svg'
import hambuger from '../../assets/hambuger.svg'
import { Cab, Info, InfoText, Online, Icons, ImgProfile  } from './style';

export default function Header(props) {

  function changePerson (e){
    props.setPerson(e.target.value)
  }

  return (
    <Cab>
      <Info>
          <ImgProfile src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='ima' height={'40px'} width={'40px'}/>
          <InfoText>
            <select value={props.person} onChange={changePerson}>
              <option selected value='me'>Me</option>
              <option value='gabriel'>Gabriel</option>
              <option value='lucas'>Lucas</option>
              <option value='everson'>Everson</option>
            </select>
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
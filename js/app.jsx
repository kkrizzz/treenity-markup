import Node from './node';
import SimpleInput from './simple-input';
import ButtonPage from './button';
import Error from './error';
import VarPropsPage from './var-props';
import ProgersMenu from './progers-menu';
import ProgersMenuMetas from './progers-menu-metas';
import ProgersMenuBlocked from './progers-menu-blocked';
import ProgersMenuBlockedCLOSED from './progers-menu-blocked-CLOSED';
import ProgersMenuMetasCLOSED from './progers-menu-metas-CLOSED';

export default function App() {
  // return <Node />;
  // return <ButtonPage />;
  // return  <SimpleInput/>;
  // return <Error/>;
  // return <VarPropsPage />;
  // return <ProgersMenu/>;
  // return <ProgersMenuMetas/>;
  // return <ProgersMenuBlocked/>;
  return(
    <div className='main'>
      <ProgersMenu/>
      {/* <ProgersMenuMetas/>
      <ProgersMenuBlocked/>
      <ProgersMenuBlockedCLOSED/>
      <ProgersMenuMetasCLOSED/> */}
    </div>
  );
}

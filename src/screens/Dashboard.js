//importaciones
import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Permissions from 'expo-permissions';
import Button from '../components/Button';

//menu
import TodoStore from './data/TodoStore';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

//estado informes
import TodoInformes from './screens/TodoInformes';
import Completados from './screens/Completados';
import Pendientes from './screens/Pendientes';

//informes
import Detalles from './src/informes/components/Detalles';
import Entidades from './src/informes/entidades/Entidades';
import Contraloria from './src/informes/entidades/contraloria';
import Procuraduria from './src/informes/entidades/procuraduria';
import Contaduria from './src/informes/entidades/contaduria';
import ContraloriaD from './src/informes/entidades/contraloriad';
import MHacienda from './src/informes/entidades/mhacienda';
import MEducacion from './src/informes/entidades/meducacion';
import MInterior from './src/informes/entidades/minterior';
import EGobernacion from './src/informes/entidades/gobernacion';
import Superintendencia from './src/informes/entidades/superintendencia';
import Supersalud from './src/informes/entidades/supersalud';
import UVictimas from './src/informes/entidades/uvictimas';
import RTierras from './src/informes/entidades/rtierras';
import FPublica from './src/informes/entidades/fpublica';
import Planeacion from './src/informes/entidades/planeacion';
import Alcaldia from './src/informes/entidades/Alcaldia';
import Defensoria from './src/informes/entidades/defensoria';
import DIAN from './src/informes/entidades/DIAN';
import MCultura from './src/informes/entidades/m_cultura';
import MDeporte from './src/informes/entidades/m_deporte';
import MProteccion from './src/informes/entidades/mproteccion';

import HomeScreen from './HomeScreen'

//recursos
import Recursos from './src/recursos/home_Gestion_de_recursos';

//Menu recursos
import Nacion from './src/recursos/Nation';
import Gobernacion from './src/recursos/Gobernacion';
import Embajadas from './src/recursos/Embajadas';
import SGR from './src/recursos/SGR';
import CIntern from './src/recursos/Cooperacion';

//Departamental
import ICCU from './src/recursos/Gobernacion/Giccu';
  import Ippuentes from './src/recursos/Gobernacion/Iccu/Ppuentes';
  import Imrvial from './src/recursos/Gobernacion/Iccu/Mrvial';
  import Ipespacio from './src/recursos/Gobernacion/Iccu/Pespacio';
  import Ipvtercia from './src/recursos/Gobernacion/Iccu/Pvtercia';
  import Ipvurban from './src/recursos/Gobernacion/Iccu/Pvurban';
import SecVivienda from './src/recursos/Gobernacion/Gvivienda';
  import Svpmbarrios from './src/recursos/Gobernacion/Vivienda/Pmbarrios';
  import Svpmconstru from './src/recursos/Gobernacion/Vivienda/pmcontruccion';
import SecMinas from './src/recursos/Gobernacion/Gminas';
  import SMpredes from './src/recursos/Gobernacion/Minas/Pcgredes';
  import SMprural from './src/recursos/Gobernacion/Minas/Perural'; 
  import SMpurban from './src/recursos/Gobernacion/Minas/Peurbana';
  import SMconexion from './src/recursos/Gobernacion/Minas/Rgconexion';
import Idecut from './src/recursos/Gobernacion/Gidecut';
  import IPicultura  from './src/recursos/Gobernacion/Idecut/Picultura';
  import IPituristicos from './src/recursos/Gobernacion/Idecut/Pituristicos';
import Deconomico from './src/recursos/Gobernacion/Gcdeconomico';
  import Dpinproductiva from './src/recursos/Gobernacion/Cdeconomico/Pdinproductiva';
import Unidadadmin from './src/recursos/Gobernacion/Guadmin';
  import Upriesgo from './src/recursos/Gobernacion/Guadmin/Priesgo';
import Indeportes from './src/recursos/Gobernacion/GIndeportes';
  import Ipdeportiva from './src/recursos/Gobernacion/Indeportes/pideportiva';
  import Ipsaludable from './src/recursos/Gobernacion/Indeportes/ppsaludable';
import Gagricultura from './src/recursos/Gobernacion/Gsecagricultura';
  import GAagricola from './src/recursos/Gobernacion/Sagricultura/Pamdagricola';
  import GAproductivos from './src/recursos/Gobernacion/Sagricultura/Pproductivos';
  import GAagrpecuaria from './src/recursos/Gobernacion/Sagricultura/pdiagropecuaria';
import GSambiente from './src/recursos/Gobernacion/Gsecambiente';
  import GApredios from './src/recursos/Gobernacion/secambiente/Adpredios';
  import GAambiente from './src/recursos/Gobernacion/secambiente/Pambiente';
import GSgobierno from './src/recursos/Gobernacion/Gsecgobierno';
  import GGordenpublico from './src/recursos/Gobernacion/Secgobierno/Pdordenpublico';
  import GGvictima from './src/recursos/Gobernacion/Secgobierno/Pgvictima';
  import GGgobierno from './src/recursos/Gobernacion/Secgobierno/Psgobierno';
import GSsalud from './src/recursos/Gobernacion/Gsecsalud';
  import GSambulancia from './src/recursos/Gobernacion/Secsalud/Pdambulancia';
  import GShospitalaria from './src/recursos/Gobernacion/Secsalud/Pdhospitalaria';
  import GSinfraestructura from './src/recursos/Gobernacion/Secsalud/Pdinfraestructura';
import SecEducacion from './src/recursos/Gobernacion/Gseceducaccion';
  import GEdescolar from './src/recursos/Gobernacion/Seducacion/pdescolar';
  import GEinfraestr from './src/recursos/Gobernacion/Seducacion/pinfraestructura';

//Rec Embajada
import EmAlemania from './src/recursos/Embajadas/Emalemania';
import EmAustralia from './src/recursos/Embajadas/Emaustralia';
import EmBelgica from './src/recursos/Embajadas/Embelgica';
import EmCanada from './src/recursos/Embajadas/Emcanada';
import EmCorea from './src/recursos/Embajadas/Emcorea';
import EmEspaña from './src/recursos/Embajadas/Emespaña';
import EmFrancia from './src/recursos/Embajadas/Emfrancia';
import EmJapon from './src/recursos/Embajadas/Emjapon';
import EmNoruega from './src/recursos/Embajadas/Emnoruega';
import EmNZelanda from './src/recursos/Embajadas/Emnuevazelan';
import EmRUnido from './src/recursos/Embajadas/Emreinounid';
import EmSuecia from './src/recursos/Embajadas/Emsuecia';
import EmSuiza from './src/recursos/Embajadas/Emsuiza';
import EmUsa from './src/recursos/Embajadas/Emusa';

//Nacion
import Nadmin from './src/recursos/Nacion/Administrativos';
import NAdps from './src/recursos/Nacion/Administracion/Dps';
  import NADproduc from './src/recursos/Nacion/Administracion/Dps/productiva';
  import NADvial from './src/recursos/Nacion/Administracion/Dps/Vial';
import NAcar from './src/recursos/Nacion/Administracion/Car';
import NAinvias from './src/recursos/Nacion/Administracion/Invias';

import Nministerios from './src/recursos/Nacion/Ministerios';
import NMdeporte from './src/recursos/Nacion/Ministerios/Ndeporte';
  import NMDcoliseo from './src/recursos/Nacion/Ministerios/Deporte/Rccoliseos';
  import NMDcancha from './src/recursos/Nacion/Ministerios/Deporte/Rcmcanchas';
  import NMDpista from './src/recursos/Nacion/Ministerios/Deporte/Rcmpistas';
  import NMDpiscina from './src/recursos/Nacion/Ministerios/Deporte/Rcpiscinas';
  import NMDparque from './src/recursos/Nacion/Ministerios/Deporte/Rparques';
import NMvivienda from './src/recursos/Nacion/Ministerios/Nvivienda';
  import NMVsocial from './src/recursos/Nacion/Ministerios/Vivienda/Pvisocial';
  import NMVvicem from './src/recursos/Nacion/Ministerios/Vivienda/Vapsb';
import NMminas from './src/recursos/Nacion/Ministerios/Nminas';
  import NMMelectrifica from './src/recursos/Nacion/Ministerios/Minas/pelectrificacion';
    import NMMEfaer from './src/recursos/Nacion/Ministerios/Minas/electrificacion/Faer';
    import NMMEfazni from './src/recursos/Nacion/Ministerios/Minas/electrificacion/Fazni';
    import NMMEprone from './src/recursos/Nacion/Ministerios/Minas/electrificacion/Prone';
  import NMMgas from './src/recursos/Nacion/Ministerios/Minas/pgas';
import NMagricultura from './src/recursos/Nacion/Ministerios/Nagricultura';
import NMambiente from './src/recursos/Nacion/Ministerios/Nambiente';
import NMciencia from './src/recursos/Nacion/Ministerios/Nciencia';
import NMcomercio from './src/recursos/Nacion/Ministerios/Ncomercio';
import NMcultura from './src/recursos/Nacion/Ministerios/Ncultura';
import NMeducacion from './src/recursos/Nacion/Ministerios/Neducacion';
import NMinterior from './src/recursos/Nacion/Ministerios/Ninterior';
import NMsalud from './src/recursos/Nacion/Ministerios/Nsalud';
import NMtics from './src/recursos/Nacion/Ministerios/Ntics';

//Rec SGR
import Re_gen from './src/recursos/files/requisitosgen'
import Re_sec from './src/recursos/lineas/requisitossec'
import Agri from './src/recursos/files/Agricultura'
import Sambi from './src/recursos/files/Ambiente'
import Ctei from './src/recursos/files/ctei'
import Educ from './src/recursos/files/Educacion'
import Sdepor from './src/recursos/files/Sdeporte'
import Fiscalia from './src/recursos/files/Fiscalia'
import Defensa from './src/recursos/files/Defensa'
import Comer from './src/recursos/files/Comercio'
import Cult from './src/recursos/files/Cultura'
import Just from './src/recursos/files/Justicia'
import MinE from './src/recursos/files/MinasE'
import Incl from './src/recursos/files/Inclusion'
import Salud_pro from './src/recursos/files/Saludp'
import Stecno from './src/recursos/files/Tecnologias'
import Strans from './src/recursos/files/Transporte'
import TransporteO from './src/recursos/files/TransporteO'
import Svivienda from './src/recursos/files/Vivienda'

//Rec COOP
import C_fundacion from './src/recursos/Cooperacion/Finteramericana';
import C_Emprendedor from './src/recursos/Cooperacion/Femprendedor';
import C_ford from './src/recursos/Cooperacion/Fford';
import C_acdc from './src/recursos/Cooperacion/Oacdc';
import C_drural from './src/recursos/Cooperacion/Adrural';
import C_iberescena from './src/recursos/Cooperacion/Iberescena';
import C_mercociudades from './src/recursos/Cooperacion/Mercociudades';
import C_innpulsa from './src/recursos/Cooperacion/Innpulsa';
import C_bmundial from './src/recursos/Cooperacion/Bmundial';
import C_binteramericano from './src/recursos/Cooperacion/Binteramericano';
import C_dgeneral from './src/recursos/Cooperacion/Dgeneral';
import C_nunidas from './src/recursos/Cooperacion/Nunidas';

//pdm files
import PDM from './src/pdm/home_pdm';
import Sectores_pdm from './src/pdm/sectores_pdm';
import Programas_pdm from './src/pdm/programas_pdm';
import Detallespdm from './src/pdm/Detallespdm';


//pdm meta ejecutadas
import Progresoe from './src/pdm/Datos/Ejecutada/progresoe';
import Progresoe1 from './src/pdm/Datos/Ejecutada/progresoe1';
import Progresoe2 from './src/pdm/Datos/Ejecutada/progresoe2';
import Progresoe3 from './src/pdm/Datos/Ejecutada/progresoe3';

//pdm meta Programada
import Progresop from './src/pdm/Datos/Programada/progresop';
import Progresop1 from './src/pdm/Datos/Programada/progresop1';
import Progresop2 from './src/pdm/Datos/Programada/progresop2';
import Progresop3 from './src/pdm/Datos/Programada/progresop3';

//PDD
import PDD from './src/pdd/lineas/home'
import Bienestar from './src/pdd/lineas/bienestar'
import Integracion from './src/pdd/lineas/integracion'
import Competitividad from './src/pdd/lineas/competitividad'
import Sostenibilidad from './src/pdd/lineas/sostenibilidad'
import Gobernanza from './src/pdd/lineas/gobernanza'

//Pdd bienestar
import Agencia from './src/pdd/files/bienestar/agencia'
import Uniadmin from './src/pdd/files/bienestar/u_admin'
import Seducación from './src/pdd/files/bienestar/s_educacion'
import Sgobierno from './src/pdd/files/bienestar/s_gobierno'
import Desarrollo from './src/pdd/files/bienestar/s_desarrollo'
import Shabitad from './src/pdd/files/bienestar/s_habitad'
import Smujer from './src/pdd/files/bienestar/s_mujer'
import Stransporte from './src/pdd/files/bienestar/s_transporte'
import Ssalud from './src/pdd/files/bienestar/s_salud'
import Alta from './src/pdd/files/bienestar/alta'
import Beneficencia from './src/pdd/files/bienestar/beneficencia'
import Corporacion from './src/pdd/files/bienestar/corporacion'
import Infraestructura from './src/pdd/files/bienestar/infraestructura'
import Departamental from './src/pdd/files/bienestar/departamental'
import BDepartamental from './src/pdd/files/bienestar/departamentalr'

//pdd integracion
import Empresas from './src/pdd/files/integracion/empresas'
import IInfraestructura from './src/pdd/files/integracion/infraestructura'
import IDepartamental from './src/pdd/files/integracion/departamental'
import IAgricultura from './src/pdd/files/integracion/agricultura'
import IAmbiente from './src/pdd/files/integracion/ambiente'
import ICompetitividad from './src/pdd/files/integracion/competitividad'
import IGobierno from './src/pdd/files/integracion/gobierno'
import IHabitat from './src/pdd/files/integracion/habitat'
import IIntegracion from './src/pdd/files/integracion/integracion'
import IPlaneacion from './src/pdd/files/integracion/planeacion'
import ITransporte from './src/pdd/files/integracion/transporte'

//pdd sostenibilidad
import SEmpresas from './src/pdd/files/sostenibilidad/empresas'
import SAgricultura from './src/pdd/files/sostenibilidad/agricultura'
import SAmbiente from './src/pdd/files/sostenibilidad/ambiente'
import SCompetitividad from './src/pdd/files/sostenibilidad/competitividad'
import SPublica from './src/pdd/files/sostenibilidad/publica'
import SMinas from './src/pdd/files/sostenibilidad/minas'
import SSalud from './src/pdd/files/sostenibilidad/salud'
import STecnologias from './src/pdd/files/sostenibilidad/tecnologias'
import SAdministrativa from './src/pdd/files/sostenibilidad/administrativa'

//pdd competitividad
import CCorporacion from './src/pdd/files/competitividad/corporacion'
import CEmpresas from './src/pdd/files/competitividad/empresas'
import CInfra from './src/pdd/files/competitividad/ins_insfraestructura'
import CDepartamental from './src/pdd/files/competitividad/ins_departamental'
import CAgricultura from './src/pdd/files/competitividad/sec_agricultura'
import CCiencia from './src/pdd/files/competitividad/sec_ciencia'
import CCompeti from './src/pdd/files/competitividad/sec_competitividad'
import CCoopera from './src/pdd/files/competitividad/sec_cooperacion'
import CEduca from './src/pdd/files/competitividad/sec_educacion'
import CSmujer from './src/pdd/files/competitividad/sec_mujer'
import CSminas from './src/pdd/files/competitividad/sec_minas'
import CStecno from './src/pdd/files/competitividad/sec_tecnologia'
import CStransporte from './src/pdd/files/competitividad/sec_transporte'

//pdd gobernanza
import GDepartamental from './src/pdd/files/gobernanza/departamental'
import GControl from './src/pdd/files/gobernanza/control'
import GDesarrollo from './src/pdd/files/gobernanza/desarrollo'
import GEducacion from './src/pdd/files/gobernanza/educacion'
import GGob from './src/pdd/files/gobernanza/gobierno'
import GHacienda from './src/pdd/files/gobernanza/hacienda'
import GFuncion from './src/pdd/files/gobernanza/funcion'
import GPlaneacion from './src/pdd/files/gobernanza/planeacion'
import GPrensa from './src/pdd/files/gobernanza/prensa'
import GSalud from './src/pdd/files/gobernanza/salud'
import GTecnologia from './src/pdd/files/gobernanza/tecnologia'
import GTransporte from './src/pdd/files/gobernanza/transporte'
import GGeneral from './src/pdd/files/gobernanza/general'
import GJuridica from './src/pdd/files/gobernanza/juridica'


//plataforma de ingresos - gastos educacion
import PIngresos from './src/Plataforma_de_ingresos/Home'
import PEducacion from './src/Plataforma_de_ingresos/Sectores/Pi_educacion'
import PSalud from './src/Plataforma_de_ingresos/Sectores/Pi_salud'
import PAPSB from './src/Plataforma_de_ingresos/Sectores/PAPSB'
import PDeporte from './src/Plataforma_de_ingresos/Sectores/PI_deporte'
import PCultura from './src/Plataforma_de_ingresos/Sectores/PI_cultura'
import PEnergia from './src/Plataforma_de_ingresos/Sectores/PI_energia'
import PVivienda from './src/Plataforma_de_ingresos/Sectores/PI_vivienda'
import PAgropecuario from './src/Plataforma_de_ingresos/Sectores/PI_agropecuario'
import PTransporte from './src/Plataforma_de_ingresos/Sectores/PI_transporte'
import PAmbiente from './src/Plataforma_de_ingresos/Sectores/PI_ambiente'
import PCentros from './src/Plataforma_de_ingresos/Sectores/PI_centros'
import PRiesgos from './src/Plataforma_de_ingresos/Sectores/PI_riesgos'
import PPromocion from './src/Plataforma_de_ingresos/Sectores/PI_promocion'
import PVulnerable from './src/Plataforma_de_ingresos/Sectores/PI_vulnerable'
import PEquipamiento from './src/Plataforma_de_ingresos/Sectores/PI_equipamiento'
import PDesarrollo from './src/Plataforma_de_ingresos/Sectores/PI_desarrollo'
import PFortalecimiento from './src/Plataforma_de_ingresos/Sectores/PI_fortalecimiento'
import PJusticia from './src/Plataforma_de_ingresos/Sectores/PI_justicia'


import CServicios from './src/contratacion/types/CServicios'
import CreateTaskServicio from './src/contratacion/types/CreateTaskServicio';
import { Notifications } from 'expo';



class OpenMenu extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{width: 40,
              height: 40,
              padding: 4,
              borderRadius: 50,
              justifyContent: "center",
              alignSelf: "flex-end",
              marginLeft: 20,
              backgroundColor: '#18eac2'}}>
          <Image
            source={require('./assets/drawer.png')}
            style={{ width: 34, height: 34}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: TodoInformes,
    navigationOptions: ({ navigation }) => ({
      title: 'Todos Los Informes',
      headerLeft: () => <OpenMenu navigationProps = {navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
  Detalles:{
    screen:Detalles,
    navigationOptions: ({navigation}) => ({
      title:'Detalles de Informe',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      })
    }
});


const InformesCompletados = createStackNavigator({
  InfoComple: {
    screen: Completados,
    navigationOptions: ({ navigation }) => ({
      title: 'Informes Completados',
      headerLeft: () => <OpenMenu navigationProps = {navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
    },
    Detalles:{
      screen:Detalles,
      navigationOptions: ({navigation}) => ({
        title:'Detalles de Informe',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    }
});

const InformesPendientes = createStackNavigator({
  InfoPen: {
    screen: Pendientes,
    navigationOptions: ({ navigation }) => ({
      title: 'Informes Pendientes',
      headerLeft: () => <OpenMenu navigationProps = {navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
    },
    Detalles:{
      screen:Detalles,
      navigationOptions: ({navigation}) => ({
        title:'Detalles de Informe',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
});

const ToEntidades = createStackNavigator({
  Entidades: {
  screen: Entidades,
  navigationOptions: ({ navigation }) => ({
    title: 'Entidades',
    headerLeft: () => <OpenMenu navigationProps = {navigation} />,
    headerStyle: {
      backgroundColor: '#ffffff',
      height: 120,
    },
    headerTintColor: '#000000',
    headerTitleStyle:{
      fontWeight: "bold"
    }
  })
  },
  Contaduria:{
    screen: Contaduria,
    navigationOptions: ({ navigation }) => ({
      title: 'Contaduria General de la Nacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Contraloria:{
    screen: Contraloria,
    navigationOptions: ({ navigation }) => ({
      title: 'Contraloria General de la Republica',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Procuraduria:{
    screen: Procuraduria,
    navigationOptions: ({ navigation }) => ({
      title: 'Procuraduria General de la Nacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  ContraloriaD:{
    screen: ContraloriaD,
    navigationOptions: ({ navigation }) => ({
      title: 'Contraloria Departamental',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  MCultura:{
    screen: MCultura,
    navigationOptions: ({ navigation }) => ({
      title: 'Ministerio de Cultura',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  MDeporte:{
    screen: MDeporte,
    navigationOptions: ({ navigation }) => ({
      title: 'Ministerio del Deporte (Coldeportes)',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  MEducacion:{
    screen: MEducacion,
    navigationOptions: ({ navigation }) => ({
      title: 'Ministerio de Educacion Nacional',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  MProteccion:{
    screen: MProteccion,
    navigationOptions: ({ navigation }) => ({
      title: 'Ministerio de Proteccion Social',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  MInterior:{
    screen: MInterior,
    navigationOptions: ({ navigation }) => ({
      title: 'Ministerio del Interior',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Superintendencia:{
    screen: Superintendencia,
    navigationOptions: ({ navigation }) => ({
      title: 'Superintendencia de Servicios Publicos Domiciliarios',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Supersalud:{
    screen: Supersalud,
    navigationOptions: ({ navigation }) => ({
      title: 'SUPERSALUD - Ministerio de la Proteccion Social',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  MInterior:{
    screen: MInterior,
    navigationOptions: ({ navigation }) => ({
      title: 'Ministerio del Interior',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  MHacienda:{
    screen: MHacienda,
    navigationOptions: ({ navigation }) => ({
      title: 'Ministerio de Hacienda',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  DIAN:{
    screen: DIAN,
    navigationOptions: ({ navigation }) => ({
      title: 'DIAN',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  UVictimas:{
    screen: UVictimas,
    navigationOptions: ({ navigation }) => ({
      title: 'Unidad para la atencion y reparacion integral a las victimas',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  RTierras:{
    screen: RTierras,
    navigationOptions: ({ navigation }) => ({
      title: 'Unidad de Restitucion de tierras',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  FPublica:{
    screen: FPublica,
    navigationOptions: ({ navigation }) => ({
      title: 'Funcion Publica',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Planeacion:{
    screen: Planeacion,
    navigationOptions: ({ navigation }) => ({
      title: 'Departamento Nacional de Planeacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EGobernacion:{
    screen: EGobernacion,
    navigationOptions: ({ navigation }) => ({
      title: 'Gobernacion del Departamento',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Alcaldia:{
    screen: Alcaldia,
    navigationOptions: ({ navigation }) => ({
      title: 'Alcaldia Municipal',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Defensoria:{
    screen: Defensoria,
    navigationOptions: ({ navigation }) => ({
      title: 'Defensoria del Pueblo',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  }
});

const DrawerNavigator = createDrawerNavigator({
  Home:{
    screen: AppNavigator,
      navigationOptions: {
        drawerLabel: 'Inicio',
        drawerIcon: <Image style={{width: 30, height: 30}} source={require('./assets/Home.png')}/>
      
      }
  },
  /*Informes:{
    screen: Informes,
    navigationOptions:{
      drawerLabel: 'Informes',
      drawerIcon: <Image style={{width: 30, height: 30}} source={require('./assets/infodrawer.png')}/>
    }
  },*/
  Completados:{
    screen: InformesCompletados,
    navigationOptions:{
      drawerLabel: 'Completados',
    }
  },
  Pendientes:{
    screen: InformesPendientes,
    navigationOptions:{
      drawerLabel: 'Pendientes',
    }
  },
  Entidades: {
    screen: ToEntidades,
    navigationOptions :{
      drawerLabel:'Entidades',
      drawerIcon: <Image style={{width: 30, height: 30}} source={require('./assets/edificio.png')}/>
    }
  }
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#ffffff',
    navigationOptions:{
      tabBarVisible:true,
    },
    headerStyle: {
      backgroundColor: '#ffffff',
      height: 120,
    },
    headerTintColor: '#000000',
    headerTitleStyle:{
      fontWeight: "bold"
    },
    contentOptions:{
      activeBackgroundColor: '#18eac2',
      inactiveBackgroundColor: '#3280e4',
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
      drawerIcon:<Image style={{width: 25, height: 25}} source={require('./assets/informes.png')}/>,
      itemStyle:{
        borderBottomWidth: .2,
        borderBottomColor: '#ffffff',
        marginTop: 5,
      },
      labelStyle:{
        fontSize:18
      }
    }
  }
)


//PDD
const PlanDesarrollo = createStackNavigator({
  Entidades: {
    screen: PDD,
    navigationOptions: ({ navigation }) => ({
      title: 'Plan de Desarrollo Departamental',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
    
  //PDD MENU
  Bienestar:{
    screen:Bienestar,
    navigationOptions: ({navigation}) => ({
      title: 'Mas Bienestar',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
  Competitividad:{
    screen:Competitividad,
    navigationOptions: ({navigation}) => ({
      title: 'Mas Competitividad',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
  Integracion:{
    screen:Integracion,
    navigationOptions: ({navigation}) => ({
      title: 'Mas Integracion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
  Sostenibilidad:{
    screen:Sostenibilidad,
    navigationOptions: ({navigation}) => ({
      title: 'Mas Sostenibilidad',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
  Gobernanza:{
    screen:Gobernanza,
    navigationOptions: ({navigation}) => ({
      title: 'Mas Gobernanza',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },

    //PDD COMPETITIVIDAD
      CCorporacion:{
        screen:CCorporacion,
        navigationOptions: ({navigation}) => ({
          title: 'Corporación Social de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CEmpresas:{
        screen:CEmpresas,
        navigationOptions: ({navigation}) => ({
          title: 'Empresas Públicas de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CInfra:{
        screen:CInfra,
        navigationOptions: ({navigation}) => ({
          title: 'Instituto de Infraestructura y Concesiones de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CDepartamental:{
        screen:CDepartamental,
        navigationOptions: ({navigation}) => ({
          title: 'Instituto Departamental de Cultura y Turismo',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CStecno:{
        screen:CStecno,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de tecnologías de la información',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },
      CStransporte:{
        screen:CStransporte,
            navigationOptions: ({navigation}) => ({
            title: 'Secretaría de transporte y movilidad',
            headerStyle: {
              backgroundColor: '#ffffff',
              height: 120,
            },
            headerTintColor: '#000000',
            headerTitleStyle:{
              fontWeight: "bold"
            }
            }),
          },
      CSmujer:{
        screen:CSmujer,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de la mujer y equidad de genero',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CSminas:{
        screen:CSminas,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de minas, energía y gas',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CCiencia:{
        screen:CCiencia,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Ciencia tecnología e innovación',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CAgricultura:{
        screen:CAgricultura,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Agricultura y Desarrollo Rural',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CCompeti:{
        screen:CCompeti,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Competitividad y desarrollo económico',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CCoopera:{
        screen:CCoopera,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de cooperación y enlace institucional',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      CEduca:{
        screen:CEduca,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Educación',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },

    //PDD INTEGRACION  
      Empresas:{
        screen:Empresas,
        navigationOptions: ({navigation}) => ({
          title: 'Empresas Públicas de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      IInfraestructura:{
        screen:IInfraestructura,
        navigationOptions: ({navigation}) => ({
          title: 'Instituto de Infraestructura y Concesiones de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      IDepartamental:{
        screen:IDepartamental,
        navigationOptions: ({navigation}) => ({
          title: 'Instituto Departamental de Cultura y Turismo',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      IAgricultura:{
        screen:IAgricultura,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Agricultura y Desarrollo Rural',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      IAmbiente:{
        screen:IAmbiente,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Ambiente',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      ICompetitividad:{
        screen:ICompetitividad,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Competitividad y desarrollo económico',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      IGobierno:{
        screen:IGobierno,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Gobierno',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      IHabitat:{
        screen:IHabitat,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Hábitat y vivienda',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      IIntegracion:{
        screen:IIntegracion,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Integración Regional',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      IPlaneacion:{
        screen:IPlaneacion,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Planeación',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      ITransporte:{
        screen:ITransporte,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de transporte y movilidad',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      //sostenibilidad
      SEmpresas:{
        screen:SEmpresas,
        navigationOptions: ({navigation}) => ({
          title: 'Empresas Públicas de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      SAgricultura:{
        screen:SAgricultura,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Agricultura y Desarrollo Rural',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      SAmbiente:{
        screen:SAmbiente,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Ambiente',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      SCompetitividad:{
        screen:SCompetitividad,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Competitividad y desarrollo económico',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      SPublica:{
        screen:SPublica,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de la Función Pública',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      SMinas:{
        screen:SMinas,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de minas, energía y gas',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      SSalud:{
        screen:SSalud,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Salud',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      STecnologias:{
        screen:STecnologias,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de tecnologías de la información',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      SAdministrativa:{
        screen:SAdministrativa,
        navigationOptions: ({navigation}) => ({
          title: ' Unidad administrativa para la gestión del riesgo de desastres',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },

    //PDD BIENESTAR
      Agencia:{
        screen:Agencia,
        navigationOptions: ({navigation}) => ({
          title: 'Agencia de Cundinamarca para la paz y el post conflicto',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Seducación:{
        screen:Seducación,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Educación',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Sgobierno:{
        screen:Sgobierno,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Gobierno',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Shabitad:{
        screen:Shabitad,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Hábitat y vivienda',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Smujer:{
        screen:Smujer,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de la mujer',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Ssalud:{
        screen:Ssalud, 
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de Salud',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Stransporte:{
        screen:Stransporte, 
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de transporte y movilidad',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Uniadmin:{
        screen:Uniadmin, 
        navigationOptions: ({navigation}) => ({
          title: 'Unidad administrativa especial de pensiones',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Desarrollo:{
        screen:Desarrollo,
        navigationOptions: ({navigation}) => ({
          title: 'Secretaría de desarrollo e inclusión social',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Alta:{
        screen:Alta,
        navigationOptions: ({navigation}) => ({
          title: 'Alta consejería para la Felicidad y el Bienestar de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Beneficencia:{
        screen:Beneficencia,
        navigationOptions: ({navigation}) => ({
          title: 'Beneficencia de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Corporacion:{
        screen:Corporacion,
        navigationOptions: ({navigation}) => ({
          title: 'Corporación Social de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Infraestructura:{
        screen:Infraestructura,
        navigationOptions: ({navigation}) => ({
          title: 'Instituto de Infraestructura y Concesiones de Cundinamarca',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      Departamental:{
        screen:Departamental,
        navigationOptions: ({navigation}) => ({
          title: 'Instituto Departamental de Cultura y Turismo',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      BDepartamental:{
        screen:BDepartamental,
        navigationOptions: ({navigation}) => ({
          title: 'Instituto Departamental para la Recreación y el Deporte',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },

    //PDD GOBERNANZA
  GDepartamental:{
    screen:GDepartamental,
    navigationOptions: ({navigation}) => ({
      title: 'Instituto Departamental de Acción Comunal',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GControl:{
    screen:GControl,
    navigationOptions: ({navigation}) => ({
      title: 'Oficina de Control Interno',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GDesarrollo:{
    screen:GDesarrollo,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de desarrollo e inclusión social',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GEducacion:{
    screen:GEducacion,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de Educación',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GGob:{
    screen:GGob,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de Gobierno',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GHacienda:{
    screen:GHacienda,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de Hacienda',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GFuncion:{
    screen:GFuncion,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de la Función Pública',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GPlaneacion:{
    screen:GPlaneacion,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de Planeación',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GPrensa:{
    screen:GPrensa,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de Prensa y comunicaciones',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GSalud:{
    screen:GSalud,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de Salud',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GTecnologia:{
    screen:GTecnologia,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de tecnologías de la información',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GTransporte:{
    screen:GTransporte,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría de transporte y movilidad',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GGeneral:{
    screen:GGeneral,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría General',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  GJuridica:{
    screen:GJuridica,
    navigationOptions: ({navigation}) => ({
      title: 'Secretaría Juridica',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  }
});

const PlanMunicipalHome = createStackNavigator({
  Entidades: {
  screen: PDM,
  navigationOptions: ({ navigation }) => ({
    title: 'Plan de Desarrollo Municipal',
    headerStyle: {
      backgroundColor: '#ffffff',
      height: 120,
    },
    headerTintColor: '#000000',
    headerTitleStyle:{
      fontWeight: "bold"
    }
    }),
  },
  Sectores_pdm:{
    screen:Sectores_pdm,
    navigationOptions: ({navigation}) => ({
      title: 'Sectores PDM',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  Programas_pdm:{
    screen:Programas_pdm,
    navigationOptions: ({navigation}) => ({
      title: 'Programas PDM',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
  Detallespdm:{
    screen:Detallespdm,
    navigationOptions: ({navigation}) => ({
      title: 'Detalles PDM',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    }),
  },
      //Meta Ejecutada
      Progresoe:{
        screen:Progresoe,
        navigationOptions: ({navigation}) => ({
          title: '2020',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },
      Progresoe1:{
        screen:Progresoe1,
        navigationOptions: ({navigation}) => ({
          title: '2021',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },
      Progresoe2:{
        screen:Progresoe2,
        navigationOptions: ({navigation}) => ({
          title: '2022',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },
      Progresoe3:{
        screen:Progresoe3,
        navigationOptions: ({navigation}) => ({
          title: '2023',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },
      //Meta Programada
      Progresop:{
        screen:Progresop,
        navigationOptions: ({navigation}) => ({
          title: '2020',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },
      Progresop1:{
        screen:Progresop1,
        navigationOptions: ({navigation}) => ({
          title: '2021',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },
      Progresop2:{
        screen:Progresop2,
        navigationOptions: ({navigation}) => ({
          title: '2022',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      },
      Progresop3:{
        screen:Progresop3,
        navigationOptions: ({navigation}) => ({
          title: '2023',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        }),
      }
    });

//RECURSOS
const GestiRecursos = createStackNavigator({
  Entidades: {
  screen: Recursos,
  navigationOptions: ({ navigation }) => ({
    title: 'Gestion De Recursos',
    headerStyle: {
      backgroundColor: '#ffffff',
      height: 120,
    },
    headerTintColor: '#000000',
    headerTitleStyle:{
      fontWeight: "bold"
    }
    }),
  },
  //RECURSOS MENU
  Nation: {
    screen: Nacion,
    navigationOptions:({navigation}) => ({
      title: 'Proyectos de la Nacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Gob: {
    screen: Gobernacion,
    navigationOptions:({navigation}) => ({
      title: 'Proyectos de la Gobernacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Emb: {
    screen: Embajadas,
    navigationOptions:({navigation}) => ({
      title: 'Proyectos de la Embajada',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  SGR: {
    screen: SGR,
    navigationOptions:({navigation}) => ({
      title: 'S.G.R',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  //DEPARTAMENTAL
  ICCU: {
    screen: ICCU ,
    navigationOptions:({navigation}) => ({
      title: 'I.C.C.U',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    Ippuentes: {
      screen: Ippuentes ,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos para puentes',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    Imrvial: {
      screen: Imrvial,
      navigationOptions:({navigation}) => ({
        title: 'Mantenimiento de la red vial',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    Ipespacio: {
      screen: Ipespacio ,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos en espacio publico',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    Ipvtercia: {
      screen: Ipvtercia,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos en vias terciarias',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    Ipvurban: {
      screen: Ipvurban,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos en vias urbanas',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  SecVivienda:{
    screen: SecVivienda,
    navigationOptions:({navigation}) => ({
      title: 'Sec. Vivienda',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    Svpmbarrios:{
      screen: Svpmbarrios,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto de mejoramiento integral de barrios',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    Svpmconstru:{
      screen: Svpmconstru,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto de mejoramiento y construccion de vivienda ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  SecMinas:{
    screen: SecMinas,
    navigationOptions:({navigation}) => ({
      title: 'Sec. Minas, Energia y Gas',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    SMpredes:{
      screen: SMpredes,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto conexion de gas por redes',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    SMprural:{
      screen: SMprural,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto electrificacion rural',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    SMpurban:{
      screen: SMpurban,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto electrificacion urbana',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    SMconexion:{
      screen: SMconexion,
      navigationOptions:({navigation}) => ({
        title: 'Requisitos gas subsidios conexion',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  Idecut:{
    screen: Idecut,
    navigationOptions:({navigation}) => ({
      title: 'Idecut',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    IPicultura:{
      screen: IPicultura,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos infraestructura cultura',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    IPituristicos:{
      screen: IPituristicos,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos de infraestructura turisticos ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  Deconomico:{
    screen: Deconomico,
    navigationOptions:({navigation}) => ({
      title: 'Sec. Competitividad y desarrollo economico',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    Dpinproductiva:{
      screen: Dpinproductiva,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos de infraestructura productiva',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  Unidadadmin:{
    screen: Unidadadmin,
    navigationOptions:({navigation}) => ({
      title: 'Unidad Administrativa',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    Upriesgo:{
      screen: Upriesgo,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto gestión de riesgo   ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  Indeportes:{
    screen: Indeportes,
    navigationOptions:({navigation}) => ({
      title: 'Indeportes',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    Ipdeportiva:{
      screen: Ipdeportiva,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos infraestructura deportiva',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    }, 
    Ipsaludable:{
      screen: Ipsaludable,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto parque bio saludable ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
  }, 
  Gagricultura:{
    screen: Gagricultura,
    navigationOptions:({navigation}) => ({
      title: 'Sec. Agricultura',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    GAagrpecuaria:{
      screen: GAagrpecuaria,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos de infraestructura agropecuaria',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    GAproductivos:{
      screen: GAproductivos,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos productivos ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    GAagricola:{
      screen: GAagricola,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos adquisición de maquinaria agricola',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  GSambiente:{
    screen: GSambiente,
    navigationOptions:({navigation}) => ({
      title: 'Sec. Ambiente',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    GApredios:{
      screen: GApredios,
      navigationOptions:({navigation}) => ({
        title: 'Adquisión de predios',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    GAambiente:{
      screen: GAambiente,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos ambiente',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  GSgobierno:{
    screen: GSgobierno,
    navigationOptions:({navigation}) => ({
      title: 'Sec. Gobierno',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    GGgobierno:{
      screen: GGgobierno,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos de infraestructura del sector gobierno',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    GGvictima:{
      screen: GGvictima,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto de generacion de ingresos a población victima ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    GGordenpublico:{
      screen: GGordenpublico,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos que versen sobre defensa, seguridad y orden publico',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  GSsalud:{
    screen: GSsalud,
    navigationOptions:({navigation}) => ({
      title: 'Sec. Salud',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    GSambulancia:{
      screen: GSambulancia,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos adquisición ambulancias',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    GShospitalaria:{
      screen: GShospitalaria,
      navigationOptions:({navigation}) => ({
        title: 'Productos de dotación hospitalaria',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    GSinfraestructura:{
      screen: GSinfraestructura,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos de infraestructura ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  SecEducacion:{
    screen: SecEducacion,
    navigationOptions:({navigation}) => ({
      title: 'Sec. Educacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    GEdescolar:{
      screen: GEdescolar,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto de dotacion escolar ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    GEinfraestr:{
      screen: GEinfraestr,
      navigationOptions:({navigation}) => ({
        title: 'Proyecto de infraestructura ',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
//Nacion  
  Nadmin:{
    screen: Nadmin,
    navigationOptions:({navigation}) => ({
      title: 'Administrativos',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    NAdps:{
      screen: NAdps,
      navigationOptions:({navigation}) => ({
        title: 'DPS',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
      NADproduc:{
        screen: NADproduc,
        navigationOptions:({navigation}) => ({
          title: 'PROYECTOS INFRAESTRUCTURA PRODUCTIVA',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      NADvial:{
        screen: NADvial,
        navigationOptions:({navigation}) => ({
          title: 'PROYECTOS DE INFRAESTRUCTURA VIAL',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
    NAinvias:{
      screen: NAinvias,
      navigationOptions:({navigation}) => ({
        title: 'INVIAS',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    NAcar:{
      screen: NAcar,
      navigationOptions:({navigation}) => ({
        title: 'CAR',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  Nministerios:{
    screen: Nministerios,
    navigationOptions:({navigation}) => ({
      title: 'Ministerios',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMdeporte:{
    screen: NMdeporte,
    navigationOptions:({navigation}) => ({
      title: 'Min Deportes',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    NMDpiscina:{
      screen: NMDpiscina,
      navigationOptions:({navigation}) => ({
        title: 'Requisitos construccion piscinas',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    NMDcoliseo:{
      screen: NMDcoliseo,
      navigationOptions:({navigation}) => ({
        title: 'Requisitos construccion coliseos',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    NMDcancha:{
      screen: NMDcancha,
      navigationOptions:({navigation}) => ({
        title: 'Requisitos construccion y mejoramientos canchas',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    NMDpista:{
      screen: NMDpista,
      navigationOptions:({navigation}) => ({
        title: 'Requisitos construccion y mejoramientos pistas',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    NMDparque:{
      screen: NMDparque,
      navigationOptions:({navigation}) => ({
        title: 'Requisitos parques recreo - deportivos',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  NMvivienda:{
    screen: NMvivienda,
    navigationOptions:({navigation}) => ({
      title: 'Min Vivienda',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    NMVsocial:{
      screen: NMVsocial,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos vivienda interes social (Urbana)',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
    NMVvicem:{
      screen: NMVvicem,
      navigationOptions:({navigation}) => ({
        title: 'Viceministerio A.P.S.B',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  NMminas:{
    screen: NMminas,
    navigationOptions:({navigation}) => ({
      title: 'Min Minas',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
    NMMelectrifica:{
      screen: NMMelectrifica,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos de electrificacion',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
      NMMEfaer:{
        screen: NMMEfaer,
        navigationOptions:({navigation}) => ({
          title: 'Faer',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      NMMEfazni:{
        screen: NMMEfazni,
        navigationOptions:({navigation}) => ({
          title: 'Fazni',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
      NMMEprone:{
        screen: NMMEprone,
        navigationOptions:({navigation}) => ({
          title: 'Prone',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
        })
      },
    NMMgas:{
      screen: NMMgas,
      navigationOptions:({navigation}) => ({
        title: 'Proyectos conexiones de gas',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
      })
    },
  NMagricultura:{
    screen: NMagricultura,
    navigationOptions:({navigation}) => ({
      title: 'Min Agricultura',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMambiente:{
    screen: NMambiente,
    navigationOptions:({navigation}) => ({
      title: 'Min Ambiente',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMciencia:{
    screen: NMciencia,
    navigationOptions:({navigation}) => ({
      title: 'Min Ciencia',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMcomercio:{
    screen: NMcomercio,
    navigationOptions:({navigation}) => ({
      title: 'Min comercio, industria y turismo',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMcultura:{
    screen: NMcultura,
    navigationOptions:({navigation}) => ({
      title: 'Min Cultura',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMeducacion:{
    screen: NMeducacion,
    navigationOptions:({navigation}) => ({
      title: 'Min Educacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMinterior:{
    screen: NMinterior,
    navigationOptions:({navigation}) => ({
      title: 'Min Interior',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMsalud:{
    screen: NMsalud,
    navigationOptions:({navigation}) => ({
      title: 'Min Salud',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  NMtics:{
    screen: NMtics,
    navigationOptions:({navigation}) => ({
      title: 'Min Tics',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
//Embajadas
  EmAlemania:{
    screen: EmAlemania,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE ALEMANIA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmAustralia:{
    screen: EmAustralia,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE AUSTRALIA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmBelgica:{
    screen: EmBelgica,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE BELGICA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmCanada:{
    screen: EmCanada,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE CANADA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmCorea:{
    screen: EmCorea,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE COREA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmEspaña:{
    screen: EmEspaña,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE ESPAÑA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmFrancia:{
    screen: EmFrancia,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE FRANCIA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmJapon:{
    screen: EmJapon,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE JAPON',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmNoruega:{
    screen: EmNoruega,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE NORUEGA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmNZelanda:{
    screen: EmNZelanda,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE NUEVA ZELANDA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmRUnido:{
    screen: EmRUnido,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE REINO UNIDO',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmSuecia:{
    screen: EmSuecia,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE SUECIA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmSuiza:{
    screen: EmSuiza,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE SUIZA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  EmUsa:{
    screen: EmUsa,
    navigationOptions:({navigation}) => ({
      title: 'EMBAJADA DE USA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  //Requisitos
  Re_gen:{
    screen: Re_gen,
    navigationOptions:({navigation}) => ({
      title: 'Requisitos Generales',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Re_sec:{
    screen: Re_sec,
    navigationOptions:({navigation}) => ({
      title: 'Requisitos Sectorial',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Agri:{
    screen: Agri,
    navigationOptions:({navigation}) => ({
      title: 'Agricultura y Desarrolo Rural',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Sambi:{
    screen: Sambi,
    navigationOptions:({navigation}) => ({
      title: 'Ambiente',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Ctei:{
    screen: Ctei,
    navigationOptions:({navigation}) => ({
      title: 'Ctei',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Educ:{
    screen: Educ,
    navigationOptions:({navigation}) => ({
      title: 'Educacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Cult:{
    screen: Cult,
    navigationOptions:({navigation}) => ({
      title: 'Cultura',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Comer:{
    screen: Comer,
    navigationOptions:({navigation}) => ({
      title: 'Comercio, industria y turismo',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Sdepor:{
    screen: Sdepor,
    navigationOptions:({navigation}) => ({
      title: 'Deporte',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Defensa:{
    screen: Defensa,
    navigationOptions:({navigation}) => ({
      title: 'Defensa y Politica',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Fiscalia:{
    screen: Fiscalia,
    navigationOptions:({navigation}) => ({
      title: 'Fiscalia',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Just:{
    screen: Just,
    navigationOptions:({navigation}) => ({
      title: 'Justicia y Derecho',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  MinE:{
    screen: MinE,
    navigationOptions:({navigation}) => ({
      title: 'Minas y Energia',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Incl:{
    screen: Incl,
    navigationOptions:({navigation}) => ({
      title: 'Inclusion Social',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Salud_pro:{
    screen: Salud_pro,
    navigationOptions:({navigation}) => ({
      title: 'Salud y Proteccion Social',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Stecno:{
    screen: Stecno,
    navigationOptions:({navigation}) => ({
      title: 'Tecnologia',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Strans:{
    screen: Strans,
    navigationOptions:({navigation}) => ({
      title: 'Transporte',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  TransporteO:{
    screen: TransporteO,
    navigationOptions:({navigation}) => ({
      title: 'Transporte Ocad Paz',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  Svivienda:{
    screen: Svivienda,
    navigationOptions:({navigation}) => ({
      title: 'Vivienda, Ciudad y Territorio',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  //Cooperacion
  CIntern:{
    screen: CIntern,
    navigationOptions:({navigation}) => ({
      title: 'Cooperacion Internacional',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_fundacion:{
    screen: C_fundacion,
    navigationOptions:({navigation}) => ({
      title: 'Fundacion Interamericana',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_Emprendedor:{
    screen: C_Emprendedor,
    navigationOptions:({navigation}) => ({
      title: 'Fondo Emprendedor',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_ford:{
    screen: C_ford,
    navigationOptions:({navigation}) => ({
      title: 'Fundacion Ford',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_acdc:{
    screen: C_acdc,
    navigationOptions:({navigation}) => ({
      title: 'Org ACDC VOCA',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_drural:{
    screen: C_drural,
    navigationOptions:({navigation}) => ({
      title: 'Agencia Desarrollo Rural',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_iberescena:{
    screen: C_iberescena,
    navigationOptions:({navigation}) => ({
      title: 'Iberescena',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_mercociudades:{
    screen: C_mercociudades,
    navigationOptions:({navigation}) => ({
      title: 'Mercociudades',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_innpulsa:{
    screen: C_innpulsa,
    navigationOptions:({navigation}) => ({
      title: 'Innpulsa',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_bmundial:{
    screen: C_bmundial,
    navigationOptions:({navigation}) => ({
      title: 'Banco Mundial',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_binteramericano:{
    screen: C_binteramericano,
    navigationOptions:({navigation}) => ({
      title: 'Banco Interamericano',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_dgeneral:{
    screen: C_dgeneral,
    navigationOptions:({navigation}) => ({
      title: 'Direccion General de Ayuda Humanitaria Echo',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
  C_nunidas:{
    screen: C_nunidas,
    navigationOptions:({navigation}) => ({
      title: 'Oraganizacion de las Naciones Unidas Para la Agricultura y la Alimentacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
    })
  },
});


//contratacion
const ContratacionHome = createStackNavigator({
  CServicios: {
    screen:CServicios,
    navigationOptions: ({navigation}) => ({
      title:'Contratacion',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
  CreateTaskServicio: {
    screen:CreateTaskServicio,
    navigationOptions: ({navigation}) => ({
      title:'Añadir nuevo Contrato',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold",
      }
    }),
  },
})


//plataforma de ingresos
const PlataformaIngresos = createStackNavigator({
  Entidades: {
  screen: PIngresos,
  navigationOptions: ({ navigation }) => ({
    title: 'Saldos',
    headerStyle: {
      backgroundColor: '#ffffff',
      height: 120,
    },
    headerTintColor: '#000000',
    headerTitleStyle:{
      fontWeight: "bold"
    }
    }),
  },
  //sectores
  PEducacion:{
    screen:PEducacion,
    navigationOptions: ({navigation}) => ({
      title: 'Educación',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
  PSalud:{
    screen:PSalud,
    navigationOptions: ({navigation}) => ({
      title: 'Salud',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
  PAPSB:{
    screen:PAPSB,
    navigationOptions: ({navigation}) => ({
      title: 'Agua Potable',
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 120,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontWeight: "bold"
      }
      }),
    },
    PDeporte:{
      screen:PDeporte,
      navigationOptions: ({navigation}) => ({
        title: 'Deporte',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
        }),
      },
    PCultura:{
      screen:PCultura,
      navigationOptions: ({navigation}) => ({
        title: 'Cultura',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
        }),
      },
    PEnergia:{
      screen:PEnergia,
      navigationOptions: ({navigation}) => ({
        title: 'Energia',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
        }),
      },
    PVivienda:{
      screen:PVivienda,
      navigationOptions: ({navigation}) => ({
        title: 'Vivienda',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
        }),
      },
    PAgropecuario:{
      screen:PAgropecuario,
      navigationOptions: ({navigation}) => ({
        title: 'Agropecuario',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
        }),
      },
    PTransporte:{
      screen:PTransporte,
      navigationOptions: ({navigation}) => ({
        title: 'Transporte',
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 120,
        },
        headerTintColor: '#000000',
        headerTitleStyle:{
          fontWeight: "bold"
        }
        }),
      },
      PAmbiente:{
        screen:PAmbiente,
        navigationOptions: ({navigation}) => ({
          title: 'Ambiente',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
      },
      PCentros:{
        screen:PCentros,
        navigationOptions: ({navigation}) => ({
          title: 'Centros de Reclusion',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      PRiesgos:{
        screen:PRiesgos,
        navigationOptions: ({navigation}) => ({
          title: 'Riesgos',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      PPromocion:{
        screen:PPromocion,
        navigationOptions: ({navigation}) => ({
          title: 'Promocion',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      PVulnerable:{
        screen:PVulnerable,
        navigationOptions: ({navigation}) => ({
          title: 'Vulnerable',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      PEquipamiento:{
        screen:PEquipamiento,
        navigationOptions: ({navigation}) => ({
          title: 'Equipamiento',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      PDesarrollo:{
        screen:PDesarrollo,
        navigationOptions: ({navigation}) => ({
          title: 'Desarrollo',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      PFortalecimiento:{
        screen:PFortalecimiento,
        navigationOptions: ({navigation}) => ({
          title: 'Fortalecimiento',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
      PJusticia:{
        screen:PJusticia,
        navigationOptions: ({navigation}) => ({
          title: 'Justicia',
          headerStyle: {
            backgroundColor: '#ffffff',
            height: 120,
          },
          headerTintColor: '#000000',
          headerTitleStyle:{
            fontWeight: "bold"
          }
          }),
        },
});

const TabNavigator = createBottomTabNavigator({
  Informes: {
    screen:DrawerNavigator,
    navigationOptions:{
      tabBarIcon: <Image style={{width: 25, height: 25}} source={require('./assets/informes.png')}/>
    }
    },
  PDM:{
    screen: PlanMunicipalHome,
    navigationOptions:{
      tabBarIcon: <Image style={{width: 25, height: 25}} source={require('./assets/PDM.png')}/>
    }
  },
  PDD: {
    screen:PlanDesarrollo,
    navigationOptions:{
      tabBarIcon: <Image style={{width: 25, height: 25}} source={require('./assets/pdd.png')}/>
      }
    },
  Proyectos: {
    screen: GestiRecursos,
    navigationOptions:{
    tabBarIcon: <Image style={{width: 25, height: 25}} source={require('./assets/recursos.png')}/>
    }
  },
  Saldos: {
    screen: PlataformaIngresos,
    navigationOptions:{
    tabBarIcon: <Image style={{width: 34, height: 26}} source={require('./assets/Billetes.png')}/>
    }
  },
  Contratacion:{
    screen:ContratacionHome,
    navigationOptions:{
      tabBarIcon: <Image style={{width: 25, height: 25}} source={require('./assets/contratacion.png')}/>
    }
  }
  },
  {
    tabBarOptions: {
      activeTintColor: '#b2ffff',
      inactiveTintColor: '#b2ffff',
      activeBackgroundColor: '#1758C5',
      inactiveBackgroundColor: '#18171c',
      adaptive : true
    },
  }
)

const AppContainer = createAppContainer(TabNavigator);

const getToken = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    return;
  }
  const token = await Notifications.getExpoPushTokenAsync();
  console.log(token)
  return token;
}

export default class App extends Component {

  componentDidMount(){
    getToken();
  }

  async UNSAFE_componentWillMount() {
    await this._askForCalendarPermissions();
    await this._askForReminderPermissions();
  }

  _askForCalendarPermissions = async () => {
    await Permissions.askAsync(Permissions.CALENDAR);
  };

  _askForReminderPermissions = async () => {
    if (Platform.OS === 'android') {
      return true;
    }

    await Permissions.askAsync(Permissions.REMINDERS);
  };

  render() {
    return (
      <TodoStore>
        <AppContainer />
      </TodoStore>
    );
  }
}

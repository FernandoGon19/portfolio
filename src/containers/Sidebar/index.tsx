import Titulo from "../../components/Titulo"
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import { Descricao, BotaoTema,  SidebarContainer } from './styles'

const Sidebar = () => (
    <aside>
        <SidebarContainer>
            <Avatar></Avatar>
            <Titulo fontSize={20}>Fernando</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>FernandoGon19</Paragrafo>
            <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
            <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
        
    </aside>
)

export default Sidebar
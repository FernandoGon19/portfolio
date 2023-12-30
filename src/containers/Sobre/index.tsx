import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";


const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo='principal'>
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Dolore obcaecati delectus, 
            dicta quam sit ducimus quas quos veniam blanditiis. 
            Molestias explicabo neque odit, 
            aliquam nulla at in error maxime eos.
        </Paragrafo>
        <GithubSecao>
            <img  src="https://github-readme-stats.vercel.app/api?username=FernandoGon19&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=FernandoGon19&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSecao>
    </section>
)

export default Sobre
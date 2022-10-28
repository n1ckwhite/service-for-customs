import { BackLink } from "../../components/BackLink/BackLink";
import { Header } from "../../components/Header/Header";
import { ModalUserInfo } from "../../components/ModalUserInfo/ModalUserInfo";
import { ProjectsName } from "../../components/ProjectsName/ProjectsName";
export const MyProjects = () => {
  return (
    <div>
      <Header />
      <ProjectsName title="Страница проектов">
        <BackLink toLink="/"/>
      </ProjectsName>
      <ModalUserInfo />
    </div>
  );
};

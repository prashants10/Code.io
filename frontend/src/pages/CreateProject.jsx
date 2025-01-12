import useCreateProject from "../hooks/apis/mutations/useCreateProject";

const CreateProject = () => {
  const { createProjectMutation } = useCreateProject();

  const handleCreateProject = async () => {
    try {
      const project = await createProjectMutation();
      console.log(project);
    } catch (err) {
      console.log(err);
    }
  };
  return <button onClick={handleCreateProject}>Create Project</button>;
};

export default CreateProject;

import { Button, Row, Col, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import useCreateProject from "../hooks/apis/mutations/useCreateProject";

const CreateProject = () => {
  const { createProjectMutation } = useCreateProject();
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
      const response = await createProjectMutation();
      navigate(`/project/${response?.data}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Row span={24}>
      <Col span={24}>
        <Flex justify="center" align="center">
          <Button type="primary" onClick={handleCreateProject}>
            Create Project
          </Button>
        </Flex>
      </Col>
    </Row>
  );
};

export default CreateProject;

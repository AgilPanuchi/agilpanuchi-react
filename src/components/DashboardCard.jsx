import { Card, Button } from "react-bootstrap";
import imgx from "../assets/react.svg";

const DashboardCard = () => {
  return (
    <div>
      <Card className="text-center shadow-sm mb-4">
        <Card.Img className="pt-3" variant="top" src={imgx} style={{ height: "100px" }} />
        <Card.Body>
          <Card.Title className="mb-3">Project Name</Card.Title>
          <Card.Text>"Deskripsi ini adalah contoh dari kartu. Tambahkan isi yang sesuai dengan maksud kartu atau yang menggambarkan fitur utama."</Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashboardCard;

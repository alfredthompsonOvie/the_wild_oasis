import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import Button from "../ui/Button";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";

// import { useState } from "react";

function Cabins() {
  // const [showForm, setShowForm] = useState(false)
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">All cabins</Heading>
				<CabinTableOperations />
			</Row>

			<Row>
        <CabinTable />
        
				<AddCabin />
        {/* <Button onClick={()=> setShowForm(x=> !x)}>Add new cabin</Button>

        {showForm && <CreateCabinForm />} */}
			</Row>
		</>
	);
}

export default Cabins;

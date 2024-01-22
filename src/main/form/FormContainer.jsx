import { useState } from "react";
import Preloader from "../../components/preloader/Preloader.jsx";
import AfterSent from "../../components/afterSent/AfterSent.jsx";
import Form from "./Form.jsx";

const FormContainer = ({ handleRefreshData }) => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleLoading = (bool) => {
		setLoading(bool);
	};
	const handleSuccess = (resultStatus) => {
		setSuccess(resultStatus);
		handleRefreshData(resultStatus);
	};

	return (
		<section className="post-form">
			<div className="container">
				{loading ? (
					<Preloader />
				) : success ? (
					<AfterSent />
				) : (
					<Form handleLoading={handleLoading} handleSuccess={handleSuccess} />
				)}
			</div>
		</section>
	);
};

export default FormContainer;

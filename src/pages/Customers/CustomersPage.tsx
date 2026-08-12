import { useEffect } from "react";
import customerService from "../../services/customer.service";
import { getErrorMessage } from "../../utils/error";

const CustomersPage = () => {

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await customerService.getCustomers();
        console.log(response.data);
      } catch (error) {
        getErrorMessage(error);
      }
    }
    fetchCustomers();

  }, []);

  return (
    <div>CustomersPage</div>
  )
}

export default CustomersPage
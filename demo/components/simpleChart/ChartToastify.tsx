import { toast } from 'react-toastify';

const ChartToastify = (props: any) => {
    const objectString = JSON.stringify(props);
    toast(objectString, { autoClose: 1000 });
};

export default ChartToastify;
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect} from 'react';
import { getinfo } from '../../store/actions';

async function AddProduct (oneProducts){
    const navigate = useNavigate();
    const dispatch = useDispatch;
    let [ car ] = useSelector(state=>state.userInfo)
    const id = localStorage.getItem('userId');
    const docRef = doc(db, 'users', id);
    car = car.push(oneProducts);
    const item = {
        car: car,
    }
    dispatch(getinfo(id));
    await setDoc(docRef, item);
    navigate('/');

    useEffect(() => {
        dispatch(getinfo(id));
    },[])
}
export default AddProduct;
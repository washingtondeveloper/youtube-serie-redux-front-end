import { logout } from '../store/ducks/auth';

export default function Logout() {
	localStorage.removeItem('token');
	return logout();
}

import { useArmstrongConfig } from '../config';

export const useLocation = () => useArmstrongConfig().routing.location;
export const useNavigate = () => useArmstrongConfig().routing.navigate;

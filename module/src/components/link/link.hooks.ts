import { useArmstrongConfig } from '../config';

export const useLocation = () => useArmstrongConfig().routingConfig.location;
export const useNavigate = () => useArmstrongConfig().routingConfig.navigate;

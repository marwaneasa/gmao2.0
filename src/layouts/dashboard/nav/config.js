// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'tableau de bord',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'utilisateurs',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'matériels',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Interventions',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Maintenance',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;

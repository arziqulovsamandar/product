import { RouteLocationNormalized } from 'vue-router';
import { DefaultLayout } from '../../constans/layout';


export async function layoutMiddleware(route: RouteLocationNormalized) {
  const { layout } = route.meta as { layout: string };

  const layoutName = layout || DefaultLayout.user;

  const component = await import(`../../components/layouts/Layout/${layoutName}.vue`);

  route.meta.layoutComponent = (component.default as any);
}

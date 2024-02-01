import { RouteLocationNormalized } from 'vue-router';


export async function layoutMiddleware(route: RouteLocationNormalized) {
  const { layout } = route.meta as { layout: string };

  const layoutName = layout || 'User';

  const component = await import(`../../components/layouts/${layoutName}.vue`);

  route.meta.layoutComponent = (component.default as any);
}

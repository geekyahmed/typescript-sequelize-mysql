import { App } from './app'

import { TodoRoute } from './routes'

const app = new App([new TodoRoute()]);

app.listen();

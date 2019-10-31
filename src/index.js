import express from "express";
import morgan from "morgan";
import routes from "./routes";
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect app to routese
app.use(routes);

// / catch 404 and forward to error handler
app.use((req, res, next) => {
  res.send(
    `'https://macabre-spider-57186.herokuapp.com/api/stocks','https://macabre-spider-57186.herokuapp.com/api/users/register', 'https://macabre-spider-57186.herokuapp.com/api/users/dashboard', 'https://macabre-spider-57186.herokuapp.com/api/users/login'`
  );
});

// finally, let's start our server...
const server = app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${server.address().port}`);
});

export default app;

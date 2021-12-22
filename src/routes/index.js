import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Start from '../pages/Start';
import Questions from '../pages/Questions';
import Result from '../pages/Result';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/start" component={Start} />
      <Route exact path="/questions" component={Questions} />
      <Route exact path="/result" component={Result} />
    </Switch>
  );
}

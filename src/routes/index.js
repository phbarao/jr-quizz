import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Start from '../pages/Start';
import Questions from '../pages/Questions';
import Result from '../pages/Result';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/start" component={Start} />
      <Route path="/questions" component={Questions} />
      <Route path="/result" component={Result} />
    </Switch>
  );
}

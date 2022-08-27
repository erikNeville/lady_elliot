import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  title?: string;
}

const LeRoute: React.FC<Props> = ({
  component: Component,
  title,
  ...rest
}: Props) => {
  const docTitle = title ? `${title} | Lady Elliot Art` : 'Lady Elliot Art';
  document.title = docTitle;

  return (
    <Route
      {...rest}
      render={(props): JSX.Element => <Component {...props} />}
    />
  );
};

export default LeRoute;

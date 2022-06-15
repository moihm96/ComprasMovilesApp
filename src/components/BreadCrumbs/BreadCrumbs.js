import React from 'react';
import './BreadCrumbs.css';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

export function BreadCrumbs() {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split('/').filter((item) => item);
    return (
      <div>
        <Breadcrumb className="container-breadcrumb">
          {pathnames.length > 0 ? (
            <Breadcrumb.Item key="Principal">
              <Link to="/">Principal</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key="Principal">Principal</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routesTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={name}>
                <Link to={`${routesTo}`}>{name}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };
  return <>{breadCrumbView()}</>;
}

import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
import RenderRouter from './routes';
import { useSelector } from 'react-redux';
import { Storage } from 'stores/Storage';

const App: React.FC = () => {
  const { locale } = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.login);
  // set the locale for the user
  // more languages options can be added here
  useEffect(() => {
    moment.locale('en');
    Storage.user = user;
    // if (locale === 'en_US') {
    //   moment.locale('en');
    // } else if (locale === 'zh_CN') {
    //   moment.locale('zh-cn');
    // }
  }, [locale, user]);

  /**
   * handler function that passes locale
   * information to ConfigProvider for
   * setting language across text components
   */
  const getAntdLocale = () => {
    return enUS;
    // if (locale === 'en_US') {
    //   return enUS;
    // } else if (locale === 'zh_CN') {
    //   return zhCN;
    // }
  };

  return (
    <ConfigProvider locale={getAntdLocale()} componentSize="middle">
      <IntlProvider locale={locale.split('_')[0]}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;

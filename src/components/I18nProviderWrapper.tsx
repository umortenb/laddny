import { I18nProvider } from "@lingui/react";

import { i18n } from "@lingui/core";
import { useEffect } from "react";
import { useRouter } from "next/router";

export interface I18nProviderWrapperProps {
  messages: Record<string, string>;
}

const I18nProviderWrapper: React.FC<I18nProviderWrapperProps> = ({
  children,
  messages,
}) => {
  const { locale } = useRouter();

  useEffect(() => {
    i18n.load(locale, messages);
    i18n.activate(locale);
  }, [locale, messages]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

export default I18nProviderWrapper;

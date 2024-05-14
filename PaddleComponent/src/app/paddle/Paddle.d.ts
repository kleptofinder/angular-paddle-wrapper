declare var Paddle: IPaddle.Paddle;

declare namespace IPaddle {
  export interface Paddle {
    Environment: {
      set: (env: string) => void;
    };
    Setup: (config: IPaddle.PaddleConfig) => void;
    Checkout: {
      open: (options: IPaddle.PaddleCheckoutOptions) => void;
    };
  }

  export interface PaddleConfig {
    env?: string;
    vendor: number;
    eventCallback?: Function;
  }

  export type PaddleCheckoutMethod = 'overlay' | 'inline';

  export interface PaddleCheckoutOptions {
    method?: PaddleCheckoutMethod;
    product?: string | number;
    title?: string;
    message?: string;
    coupon?: string;
    email?: string;
    marketingConsent?: '0' | '1';
    country?: PADDLE_COUNTRY;
    postcode?: string;
    allowQuantity?: boolean;
    quantity?: number;
    disableLogout?: boolean;
    locale?: PADDLE_LOCALE;
    passthrough?: string;
    referring_domain?: string;
    success?: string;
    successCallback?: string;
    closeCallback?: string;
    loadCallback?: string;
    upsell?: number;
    upsellTitle?: string;
    upsellText?: string;
    upsellAction?: string;
    upsellCoupon?: string;
    upsellPassthrough?: string;
    override?: string;
    displayModeTheme?: 'light' | 'dark';
    frameTarget?: string;
    frameStyle?: string;
    frameInitialHeight?: number;
  }

  export interface PaddlePrice {
    gross: string;
    net: string;
    tax: string;
    tax_included: boolean;
  }

  export interface PaddleProductPrice {
    price: PaddlePrice;
    quantity: number;
    country: string;
    recurring: {
      price: PaddlePrice;
      subscription: {
        trial_days: number;
        length: number;
        type: 'day' | 'week' | 'month' | 'year';
      };
    };
  }

  export interface PaddleEventCallbackData {
    event?: PADDLE_EVENT_TYPE;
    eventData?: PaddleEventData;
  }

  export interface PaddleEventDataCheckoutPriceItemPrice {
    net?: number;
    gross?: number;
    net_discount?: number;
    gross_discount?: number;
    net_after_discount?: number;
    gross_after_discount?: number;
    tax?: number;
    tax_after_discount?: number;
  }

  export interface PaddleEventDataCheckoutPriceItem {
    checkout_product_id?: number;
    product_id?: number;
    name?: string;
    custom_message?: string;
    quantity?: number;
    allow_quantity?: boolean;
    icon_url?: string;
    min_quantity?: number;
    max_quantity?: number;
    currency?: string;
    unit_price?: PaddleEventDataCheckoutPriceItemPrice;
    line_price?: PaddleEventDataCheckoutPriceItemPrice;
    discounts?: any[];
    tax_rate?: number;
    [index: string]: any;
  }

  export interface PaddleEventDataCheckoutPrice {
    currency?: string;
    unit?: string;
    unit_tax?: string;
    total?: string;
    total_tax?: string;
    items?: PaddleEventDataCheckoutPriceItem[];
  }

  export interface PaddleEventDataCheckout {
    created_at?: string;
    completed?: boolean;
    id?: string;
    coupon?: any;
    passthrough?: any;
    prices?: {
      [index: string]: PaddleEventDataCheckoutPrice;
    };
    redirect_url?: any;
    test_variant?: any;
    recurring_prices: {
      [index: string]: PaddleEventDataCheckoutPrice;
    };
  }

  export interface PaddleEventData {
    checkout?: PaddleEventDataCheckout;
    [index: string]: any;
  }

  export enum PADDLE_EVENT_TYPE {
    CheckoutLoaded = 'Checkout.Loaded',
    CheckoutClose = 'Checkout.Close',
    CheckoutComplete = 'Checkout.Complete',
    CheckoutUserSubscribed = 'Checkout.User.Subscribed',
    CheckoutQuantityChange = 'Checkout.Quantity.Change',
    CheckoutLogin = 'Checkout.Login',
    CheckoutLogout = 'Checkout.Logout',
    CheckoutCountryChanged = 'Checkout.CountryChanged',
    CheckoutPaymentMethodSelected = 'Checkout.PaymentMethodSelected',
    CheckoutCouponAdd = 'Checkout.Coupon.Add',
    CheckoutCouponSubmit = 'Checkout.Coupon.Submit',
    CheckoutCouponCancel = 'Checkout.Coupon.Cancel',
    CheckoutCouponApplied = 'Checkout.Coupon.Applied',
    CheckoutCouponRemove = 'Checkout.Coupon.Remove',
    CheckoutError = 'Checkout.Error',
    CheckoutLocationSubmit = 'Checkout.Location.Submit',
    CheckoutApplePay = 'Checkout.ApplePay',
    CheckoutLanguageChange = 'Checkout.Language.Change',
    CheckoutVatAdd = 'Checkout.Vat.Add',
    CheckoutVatCancel = 'Checkout.Vat.Cancel',
    CheckoutVatSubmit = 'Checkout.Vat.Submit',
    CheckoutVatApplied = 'Checkout.Vat.Applied',
    CheckoutVatRemove = 'Checkout.Vat.Remove',
    CheckoutPaymentMethodsShowMore = 'Checkout.PaymentMethods.ShowMore',
    CheckoutPaymentMethodsShowDefaults = 'Checkout.PaymentMethods.ShowDefaults',
    CheckoutDuplicateWarningShown = 'Checkout.DuplicateWarningShown',
    CheckoutWireTransferComplete = 'Checkout.WireTransfer.Complete',
    CheckoutPaymentComplete = 'Checkout.PaymentComplete',
  }

  export enum PADDLE_LOCALE {
    ar = 'ar',
    da = 'da',
    de = 'de',
    en = 'en',
    es = 'es',
    fr = 'fr',
    it = 'it',
    ja = 'ja',
    ko = 'ko',
    nl = 'nl',
    no = 'no',
    pl = 'pl',
    pt = 'pt',
    ru = 'ru',
    sv = 'sv',
    zh = 'Zh-Hans',
  }

  export enum PADDLE_COUNTRY {
    AD = 'AD',
    AE = 'AE',
    AF = 'AF',
    AG = 'AG',
    AI = 'AI',
    AL = 'AL',
    AM = 'AM',
    AN = 'AN',
    AO = 'AO',
    AR = 'AR',
    AS = 'AS',
    AT = 'AT',
    AU = 'AU',
    AW = 'AW',
    AZ = 'AZ',
    BA = 'BA',
    BB = 'BB',
    BD = 'BD',
    BE = 'BE',
    BF = 'BF',
    BG = 'BG',
    BH = 'BH',
    BI = 'BI',
    BJ = 'BJ',
    BM = 'BM',
    BN = 'BN',
    BO = 'BO',
    BR = 'BR',
    BS = 'BS',
    BT = 'BT',
    BV = 'BV',
    BW = 'BW',
    BY = 'BY',
    BZ = 'BZ',
    CA = 'CA',
    CC = 'CC',
    CF = 'CF',
    CG = 'CG',
    CH = 'CH',
    CI = 'CI',
    CK = 'CK',
    CL = 'CL',
    CM = 'CM',
    CN = 'CN',
    CO = 'CO',
    CR = 'CR',
    CU = 'CU',
    CV = 'CV',
    CW = 'CW',
    CX = 'CX',
    CY = 'CY',
    CZ = 'CZ',
    DE = 'DE',
    DJ = 'DJ',
    DK = 'DK',
    DM = 'DM',
    DO = 'DO',
    DZ = 'DZ',
    EC = 'EC',
    EE = 'EE',
    EG = 'EG',
    EH = 'EH',
    ER = 'ER',
    ES = 'ES',
    ET = 'ET',
    FI = 'FI',
    FJ = 'FJ',
    FK = 'FK',
    FM = 'FM',
    FO = 'FO',
    FR = 'FR',
    GA = 'GA',
    GB = 'GB',
    GD = 'GD',
    GE = 'GE',
    GF = 'GF',
    GG = 'GG',
    GH = 'GH',
    GI = 'GI',
    GL = 'GL',
    GM = 'GM',
    GN = 'GN',
    GP = 'GP',
    GQ = 'GQ',
    GR = 'GR',
    GS = 'GS',
    GT = 'GT',
    GU = 'GU',
    GW = 'GW',
    GY = 'GY',
    HK = 'HK',
    HM = 'HM',
    HN = 'HN',
    HR = 'HR',
    HT = 'HT',
    HU = 'HU',
    ID = 'ID',
    IE = 'IE',
    IL = 'IL',
    IN = 'IN',
    IO = 'IO',
    IQ = 'IQ',
    IR = 'IR',
    IS = 'IS',
    IT = 'IT',
    JE = 'JE',
    JM = 'JM',
    JO = 'JO',
    JP = 'JP',
    KE = 'KE',
    KG = 'KG',
    KH = 'KH',
    KI = 'KI',
    KM = 'KM',
    KN = 'KN',
    KP = 'KP',
    KR = 'KR',
    KW = 'KW',
    KY = 'KY',
    KZ = 'KZ',
    LA = 'LA',
    LB = 'LB',
    LC = 'LC',
    LI = 'LI',
    LK = 'LK',
    LR = 'LR',
    LS = 'LS',
    LT = 'LT',
    LU = 'LU',
    LV = 'LV',
    LY = 'LY',
    MA = 'MA',
    MC = 'MC',
    MD = 'MD',
    ME = 'ME',
    MG = 'MG',
    MH = 'MH',
    MK = 'MK',
    ML = 'ML',
    MM = 'MM',
    MN = 'MN',
    MO = 'MO',
    MP = 'MP',
    MQ = 'MQ',
    MR = 'MR',
    MS = 'MS',
    MT = 'MT',
    MU = 'MU',
    MV = 'MV',
    MW = 'MW',
    MX = 'MX',
    MY = 'MY',
    MZ = 'MZ',
    NA = 'NA',
    NC = 'NC',
    NE = 'NE',
    NF = 'NF',
    NG = 'NG',
    NI = 'NI',
    NL = 'NL',
    NO = 'NO',
    NP = 'NP',
    NR = 'NR',
    NU = 'NU',
    NZ = 'NZ',
    OM = 'OM',
    PA = 'PA',
    PE = 'PE',
    PF = 'PF',
    PG = 'PG',
    PH = 'PH',
    PK = 'PK',
    PL = 'PL',
    PM = 'PM',
    PN = 'PN',
    PR = 'PR',
    PS = 'PS',
    PT = 'PT',
    PW = 'PW',
    PY = 'PY',
    QA = 'QA',
    RE = 'RE',
    RO = 'RO',
    RS = 'RS',
    RU = 'RU',
    RW = 'RW',
    SA = 'SA',
    SB = 'SB',
    SC = 'SC',
    SD = 'SD',
    SE = 'SE',
    SG = 'SG',
    SH = 'SH',
    SI = 'SI',
    SJ = 'SJ',
    SK = 'SK',
    SL = 'SL',
    SM = 'SM',
    SN = 'SN',
    SO = 'SO',
    SR = 'SR',
    ST = 'ST',
    SV = 'SV',
    SY = 'SY',
    SZ = 'SZ',
    TC = 'TC',
    TD = 'TD',
    TF = 'TF',
    TG = 'TG',
    TH = 'TH',
    TJ = 'TJ',
    TK = 'TK',
    TL = 'TL',
    TM = 'TM',
    TN = 'TN',
    TO = 'TO',
    TR = 'TR',
    TT = 'TT',
    TV = 'TV',
    TW = 'TW',
    TZ = 'TZ',
    UA = 'UA',
    UG = 'UG',
    UM = 'UM',
    US = 'US',
    UY = 'UY',
    UZ = 'UZ',
    VA = 'VA',
    VC = 'VC',
    VE = 'VE',
    VG = 'VG',
    VI = 'VI',
    VN = 'VN',
    VU = 'VU',
    WF = 'WF',
    WS = 'WS',
    YE = 'YE',
    YT = 'YT',
    ZA = 'ZA',
    ZM = 'ZM',
    ZW = 'ZW',
  }
}

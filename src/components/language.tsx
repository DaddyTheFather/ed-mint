// LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
// @ts-ignore
const LanguageContext = createContext();
// @ts-ignore
export const LanguageProvider = ({ children }) => {
  const storedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('language') || 'default' : 'default';
  // const storedLanguage = 'default';
  const [lan, setLan] = useState(storedLanguage);
  // @ts-ignore
  const updateLanguage = (newLanguage) => {
    setLan(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const languageTexts = {
    en: {
      chain: 'Chain',
      itsanonline: `It's an online`,
      inscription: 'inscription',
      toolbox: 'toolbox',
      Inscription: 'Inscription',
      IercPow: 'Ierc Pow',
      selectTheChian: '(select the chain to be inscribed)',
      PrivatekeyPrivatekey: 'Private keyPrivate key',
      oneperline: '(required, one per line)',
      Privatekeywithor: 'Private key, with or without 0x, the program will handle it automatically',
      Addressto: 'Address to whom to forward to',
      req: '(required)',
      originalInscription: '(required, original inscription, not transcoded hexadecimal)',
      RPC: 'RPC',
      theDefault: '(optional, the default public one has bottlenecks and often fails, it is best to use paid ones, either http or ws will work)',
      ExtraMinerTip: 'Extra miner tip',
      Totalgas: 'Total gas',
      AdditionalMinerTip: 'Additional miner tip',
      Default0: 'Default 0',
      DefaultLatest: 'Default latest',
      Unitgwei: 'Unit gwei',
      example: 'example: 10',
      IntervalTime: 'Interval time between each transaction',
      minimum: '(optional, minimum 0 ms)',
      Default0ms: 'Default 0 ms',
      run: 'run',
      running: 'running',
      Log: 'Log',
      numberOfSuccesses: 'number of successes',
      FormalEnvironment: 'Formal environment',
      TestEnvironment: 'Test environment',
      PrivateKey: 'Private key',
      Tick: 'Tick',
      iercm5: '(required, example: ierc-m5)',
      itickExample: 'tick, example: ierc-m5',
      Quantity: 'Quantity',
      quantityPerSheet: '(required, quantity per sheet)',
      QuantityExample: 'Quantity, example: 10000',
      Difficulty: 'Difficulty',
      hexadecimal: '(required, hexadecimal, example: 0x00000)',
      hexadecimal2: 'Difficulty, hexadecimal, example: 0x00000',
      NumberOfCPUCores: 'Number of CPU cores',
      customize: 'customize',
      NumberOfCpu: 'Number of cpu cores, example: 12',
      defaultPublic: '(optional, default public, http, it is best to use your own)',
      GasPremium: 'Gas premium',
      theGasPrice: '(optional, the gasPrice when starting the program multiplied by the premium is the maximum gas paid)',
      TheDefault: 'The default is 110 which is 1.1 magnification, the minimum limit is 100, example: 110',
      efficiency: 'efficiency',
      NumberOfSuccesses: 'c/s Number of successes',
      optional: '(optional)',
      Rotation: 'Rotation',
      TurnOneMore: 'Turn one more',
      Clear: 'Clear'
    },
    zh: {
      chain: '链',
      itsanonline: '这是在线的',
      inscription: '铭文',
      toolbox: '工具箱',
      Inscription: '铭文',
      IercPow: 'Ierc Pow',
      selectTheChian: '(选择要铭刻的链)',
      PrivatekeyPrivatekey: '私钥',
      oneperline: '(必填，每行一个)',
      Privatekeywithor: '私钥，带有或不带0x，程序将自动处理',
      Addressto: '要转发到的地址',
      req: '(必填)',
      originalInscription: '(必填，原始铭文，不是转码的十六进制)',
      RPC: 'RPC',
      theDefault: '(可选，默认的公共节点存在瓶颈且经常失败，最好使用付费节点，http或ws都可以)',
      ExtraMinerTip: '额外的矿工提示',
      Totalgas: '总计Gas',
      AdditionalMinerTip: '额外的矿工提示',
      Default0: '默认0',
      DefaultLatest: '默认最新',
      Unitgwei: '单位gwei',
      example: '例子：10',
      IntervalTime: '每个交易之间的间隔时间',
      minimum: '(可选，最小0毫秒)',
      Default0ms: '默认0毫秒',
      run: '运行',
      running: '运行中',
      Log: '日志',
      numberOfSuccesses: '成功次数',
      FormalEnvironment: '正式环境',
      TestEnvironment: '测试环境',
      PrivateKey: '私钥',
      Tick: '刻度',
      iercm5: '(必填，例如：ierc-m5)',
      itickExample: '刻度，例如：ierc-m5',
      Quantity: '数量',
      quantityPerSheet: '(必填，每张的数量)',
      QuantityExample: '数量，例如：10000',
      Difficulty: '难度',
      hexadecimal: '(必填，十六进制，例如：0x00000)',
      hexadecimal2: '难度，十六进制，例如：0x00000',
      NumberOfCPUCores: 'CPU核心数量',
      customize: '自定义',
      NumberOfCpu: 'CPU核心数量，例如：12',
      defaultPublic: '(可选，默认为公共，http最好使用自己的)',
      GasPremium: 'Gas溢价',
      theGasPrice: '(可选，程序启动时的gasPrice乘以溢价是最大支付的gas)',
      TheDefault: '默认为110，即1.1倍，最小限制为100，例如：110',
      efficiency: '效率',
      NumberOfSuccesses: '每秒成功次数',
      optional: '(可选)',
      Rotation: '自转',
      TurnOneMore: '多转一',
      Clear: '清除'

    },

    zhtw: {
      chain: '鏈',
      itsanonline: '這是在線的',
      inscription: '銘文',
      toolbox: '工具箱',
      Inscription: '銘文',
      IercPow: 'Ierc Pow',
      selectTheChian: '(選擇要鏤刻的鏈)',
      PrivatekeyPrivatekey: '私鑰',
      oneperline: '(必填，每行一個)',
      Privatekeywithor: '私鑰，有或沒有0x，程序將自動處理',
      Addressto: '要轉發到的地址',
      req: '(必填)',
      originalInscription: '(必填，原始銘文，不是轉碼的十六進制)',
      RPC: 'RPC',
      theDefault: '(可選，默認的公共節點存在瓶頸且經常失敗，最好使用付費節點，http或ws都可以)',
      ExtraMinerTip: '額外的礦工提示',
      Totalgas: '總計Gas',
      AdditionalMinerTip: '額外的礦工提示',
      Default0: '默認0',
      DefaultLatest: '默認最新',
      Unitgwei: '單位gwei',
      example: '例子：10',
      IntervalTime: '每個交易之間的間隔時間',
      minimum: '(可選，最小0毫秒)',
      Default0ms: '默認0毫秒',
      run: '運行',
      running: '運行中',
      Log: '日誌',
      numberOfSuccesses: '成功次數',
      FormalEnvironment: '正式環境',
      TestEnvironment: '測試環境',
      PrivateKey: '私鑰',
      Tick: '刻度',
      iercm5: '(必填，例如：ierc-m5)',
      itickExample: '刻度，例如：ierc-m5',
      Quantity: '數量',
      quantityPerSheet: '(必填，每張的數量)',
      QuantityExample: '數量，例如：10000',
      Difficulty: '難度',
      hexadecimal: '(必填，十六進制，例如：0x00000)',
      hexadecimal2: '難度，十六進制，例如：0x00000',
      NumberOfCPUCores: 'CPU核心數量',
      customize: '自定義',
      NumberOfCpu: 'CPU核心數量，例如：12',
      defaultPublic: '(可選，默認為公共，http最好使用自己的)',
      GasPremium: 'Gas溢價',
      theGasPrice: '(可選，程序啟動時的gasPrice乘以溢價是最大支付的gas)',
      TheDefault: '默認為110，即1.1倍，最小限制為100，例如：110',
      efficiency: '效率',
      NumberOfSuccesses: '每秒成功次數',
      optional: '(可選)',
      Rotation: '自轉',
      TurnOneMore: '多轉一',
      Clear: '清除'

    },

    ru: {
      chain: 'Цепь',
      itsanonline: 'Это онлайн',
      inscription: 'Надпись',
      toolbox: 'Инструменты',
      Inscription: 'Надпись',
      IercPow: 'Ierc Pow',
      selectTheChian: '(выберите цепь для надписи)',
      PrivatekeyPrivatekey: 'Приватный ключ',
      oneperline: '(обязательно, по одному на строку)',
      Privatekeywithor: 'Приватный ключ, с 0x или без, программа обработает его автоматически',
      Addressto: 'Адрес, на который пересылать',
      req: '(обязательно)',
      originalInscription: '(обязательно, оригинальная надпись, не шестнадцатеричная)',
      RPC: 'RPC',
      theDefault: '(необязательно, общественные узлы по умолчанию имеют узкие места и часто отказывают, лучше использовать платные, подходит http или ws)',
      ExtraMinerTip: 'Дополнительный совет для майнера',
      Totalgas: 'Общий газ',
      AdditionalMinerTip: 'Дополнительный совет для майнера',
      Default0: 'По умолчанию 0',
      DefaultLatest: 'По умолчанию последний',
      Unitgwei: 'Единица gwei',
      example: 'Пример: 10',
      IntervalTime: 'Интервал времени между каждой транзакцией',
      minimum: '(необязательно, минимум 0 мс)',
      Default0ms: 'По умолчанию 0 мс',
      run: 'Запустить',
      running: 'Выполняется',
      Log: 'Журнал',
      numberOfSuccesses: 'Количество успешных',
      FormalEnvironment: 'Официальная среда',
      TestEnvironment: 'Тестовая среда',
      PrivateKey: 'Приватный ключ',
      Tick: 'Тик',
      iercm5: '(обязательно, пример: ierc-m5)',
      itickExample: 'Тик, пример: ierc-m5',
      Quantity: 'Количество',
      quantityPerSheet: '(обязательно, количество на листе)',
      QuantityExample: 'Количество, пример: 10000',
      Difficulty: 'Сложность',
      hexadecimal: '(обязательно, шестнадцатеричный, пример: 0x00000)',
      hexadecimal2: 'Сложность, шестнадцатеричный, пример: 0x00000',
      NumberOfCPUCores: 'Количество ядер CPU',
      customize: 'Настроить',
      NumberOfCpu: 'Количество ядер CPU, пример: 12',
      defaultPublic: '(необязательно, по умолчанию публичный, лучше использовать свой)',
      GasPremium: 'Премия за газ',
      theGasPrice: '(необязательно, gasPrice при запуске программы умножается на премию и представляет собой максимальный платеж газа)',
      TheDefault: 'По умолчанию 110, что в 1,1 раза больше, минимальное значение 100, пример: 110',
      efficiency: 'Эффективность',
      NumberOfSuccesses: 'c/s Количество успешных',
      optional: '(необязательно)',
      Rotation: 'вращение',
      TurnOneMore: 'Поверните еще один',
      Clear: 'очист'
    },

    ko: {
      chain: '체인',
      itsanonline: '온라인 상태입니다',
      inscription: '명문',
      toolbox: '도구 상자',
      Inscription: '명문',
      IercPow: 'Ierc Pow',
      selectTheChian: '(명문을 선택할 체인)',
      PrivatekeyPrivatekey: '개인 키',
      oneperline: '(필수, 한 줄에 하나씩)',
      Privatekeywithor: '개인 키, 0x가 있든 없든 프로그램이 자동으로 처리합니다',
      Addressto: '전달할 주소',
      req: '(필수)',
      originalInscription: '(필수, 원본 명문, 변환되지 않은 16진수)',
      RPC: 'RPC',
      theDefault: '(선택 사항, 기본 공개 노드는 병목 현상이 자주 발생하며 종종 실패하므로 유료 노드를 사용하는 것이 좋습니다. http 또는 ws가 모두 작동함)',
      ExtraMinerTip: '추가 광부 팁',
      Totalgas: '총 가스',
      AdditionalMinerTip: '추가 광부 팁',
      Default0: '기본 0',
      DefaultLatest: '기본 최신',
      Unitgwei: '단위 gwei',
      example: '예: 10',
      IntervalTime: '각 거래 간의 간격 시간',
      minimum: '(선택 사항, 최소 0 ms)',
      Default0ms: '기본 0 ms',
      run: '실행',
      running: '실행 중',
      Log: '로그',
      numberOfSuccesses: '성공 횟수',
      FormalEnvironment: '정식 환경',
      TestEnvironment: '테스트 환경',
      PrivateKey: '개인 키',
      Tick: '틱',
      iercm5: '(필수, 예: ierc-m5)',
      itickExample: '틱, 예: ierc-m5',
      Quantity: '수량',
      quantityPerSheet: '(필수, 시트당 수량)',
      QuantityExample: '수량, 예: 10000',
      Difficulty: '난이도',
      hexadecimal: '(필수, 16진수, 예: 0x00000)',
      hexadecimal2: '난이도, 16진수, 예: 0x00000',
      NumberOfCPUCores: 'CPU 코어 수',
      customize: '사용자 정의',
      NumberOfCpu: 'CPU 코어 수, 예: 12',
      defaultPublic: '(선택 사항, 기본 공개, 자체 사용이 가장 좋음)',
      GasPremium: '가스 프리미엄',
      theGasPrice: '(선택 사항, 프로그램 시작시의 가스 가격에 프리미엄을 곱한 것이 최대 지불 가스임)',
      TheDefault: '기본값은 110으로 1.1 배이며 최소 제한은 100이며 예: 110',
      efficiency: '효율성',
      NumberOfSuccesses: 'c/s 성공 횟수',
      optional: '(선택 사항)',
      Rotation: '회전',
      TurnOneMore: '하나 더 돌리세요',
      Clear: '제거'

    },

    ja: {
      chain: 'チェーン',
      itsanonline: 'オンラインです',
      inscription: '銘文',
      toolbox: 'ツールボックス',
      Inscription: '銘文',
      IercPow: 'Ierc Pow',
      selectTheChian: '(銘文するチェーンを選択)',
      PrivatekeyPrivatekey: 'プライベートキー',
      oneperline: '(必須、1行に1つ)',
      Privatekeywithor: 'プライベートキー、0xありなしにかかわらず、プログラムが自動的に処理します',
      Addressto: '転送先のアドレス',
      req: '(必須)',
      originalInscription: '(必須、元の銘文、変換されていない16進数)',
      RPC: 'RPC',
      theDefault: '(オプション、デフォルトの公共ノードはボトルネックがあり、しばしば失敗するので、有料のものを使用するのが最適です。httpまたはwsのいずれかが動作します)',
      ExtraMinerTip: '追加のマイナーのヒント',
      Totalgas: '合計ガス',
      AdditionalMinerTip: '追加のマイナーのヒント',
      Default0: 'デフォルト0',
      DefaultLatest: 'デフォルト最新',
      Unitgwei: '単位gwei',
      example: '例: 10',
      IntervalTime: '各トランザクション間のインターバル時間',
      minimum: '(オプション、最小0ミリ秒)',
      Default0ms: 'デフォルト0ミリ秒',
      run: '実行',
      running: '実行中',
      Log: 'ログ',
      numberOfSuccesses: '成功回数',
      FormalEnvironment: '正式な環境',
      TestEnvironment: 'テスト環境',
      PrivateKey: 'プライベートキー',
      Tick: 'チック',
      iercm5: '(必須、例: ierc-m5)',
      itickExample: 'チック、例: ierc-m5',
      Quantity: '数量',
      quantityPerSheet: '(必須、シートあたりの数量)',
      QuantityExample: '数量、例: 10000',
      Difficulty: '難易度',
      hexadecimal: '(必須、16進数、例: 0x00000)',
      hexadecimal2: '難易度、16進数、例: 0x00000',
      NumberOfCPUCores: 'CPUコア数',
      customize: 'カスタマイズ',
      NumberOfCpu: 'CPUコア数、例: 12',
      defaultPublic: '(オプション、デフォルトは公共、httpは自分自身を使用するのが最善)',
      GasPremium: 'ガスプレミアム',
      theGasPrice: '(オプション、プログラム起動時のgasPriceにプレミアムをかけたものが最大のガス料金です)',
      TheDefault: 'デフォルトは110で、1.1倍で最小制限は100、例: 110',
      efficiency: '効率',
      NumberOfSuccesses: 'c/s 成功回数',
      optional: '(オプション)',
      Rotation: '回転',
      TurnOneMore: 'もう一つ回す',
      Clear: '一掃します'

    }

    // Add more languages as needed
  };

  // @ts-ignore
  const texts = languageTexts[lan] || languageTexts['zh'];

  useEffect(() => {

  }, [lan]);

  return (
    <LanguageContext.Provider value={{ lan, updateLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
/** productName:基金名称
 *
 * currentAmount：总金额
 * profitLossDaily：昨日收益
 * showedDate收益日期
 * investorBankDetailsId： 银行卡id
 * */

/** 获取钱包持仓明细 */
export const findWalletHoldingsFunds = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            holdingsId: 355353,
            investorId: 16200,
            portfolioId: 3756407,
            productId: 9218,
            ifaCompanyId: 2150,
            portfolioName: '现金钱包',
            productName: '平安大华金管家货币',
            productCodeId: 9468,
            chargeMode: 'frontend_load',
            dividendInstruction: 'reinvest',
            price: 1,
            showedDate: 1560614400000,
            navDate: 1560614400000,
            holdingsUnits: 9.9,
            availableUnits: 9.9,
            investmentAmount: 9.89,
            currentAmount: 11.0,
            profitLoss: 1.11,
            profitLossPercent: 11.2235,
            undistributeMonetaryIncome: 1.1,
            productCode: '003465',
            unitTxSpread: 0.01,
            intraSwitchEnable: 'Y',
            interSwitchEnable: 'N',
            switchEnable: 'Y',
            sellEnable: 'Y',
            buyEnable: 'Y',
            hkMacTwEnable: 'N',
            overseasEnable: 'N',
            minRetainUnits: 0,
            minRedemptionUnits: 0,
            maxRedemptionUnits: 999999999,
            mainCode: 'MM',
            intransitAssets: 0,
            profitLossDaily: 0,
            dividendCash: 0,
            earningsPer10000: 0.7181,
            sevenDaysAnnualizedYield: 3.106,
            proportion: 0,
            rebalanceEnable: 'Y',
            fundType: 'fund',
            productFullName: '平安大华金管家货币市场基金',
            subscriptionBuySettleLagDay: 1,
            redemptionSettleLagDay: 1,
            subscriptionBuyConfirmLagDay: 1,
            redemptionConfirmLagDay: 1,
            productRiskRating: 1,
            profitLossAccumulated: 0.13,
            performance: 0,
            accumulatedPerformance: 0.00129344399815815420252487936685520113,
            cashDefault: 'Y',
            isRapidSell: 'Y',
            estimateDividendAmount: 0,
            investorDesensitizeId: '6fb4fe231ae90736e054b0992898c08c',
            investorBankDetailsId: 3542952
          },
          {
            holdingsId: 357909,
            investorId: 16200,
            portfolioId: 18495,
            productId: 9218,
            ifaCompanyId: 2150,
            portfolioName: '现金钱包',
            productName: '平安大华金管家货币',
            productCodeId: 9468,
            chargeMode: 'frontend_load',
            dividendInstruction: 'reinvest',
            price: 1,
            showedDate: 1560614400000,
            navDate: 1560614400000,
            holdingsUnits: 3.93,
            availableUnits: 2.93,
            investmentAmount: 3.93,
            currentAmount: 2.93,
            profitLoss: 0.0,
            profitLossPercent: 0.0,
            undistributeMonetaryIncome: 0,
            productCode: '003465',
            unitTxSpread: 0.01,
            intraSwitchEnable: 'Y',
            interSwitchEnable: 'N',
            switchEnable: 'Y',
            sellEnable: 'Y',
            buyEnable: 'Y',
            hkMacTwEnable: 'N',
            overseasEnable: 'N',
            minRetainUnits: 0,
            minRedemptionUnits: 0,
            maxRedemptionUnits: 999999999,
            mainCode: 'MM',
            intransitAssets: 0,
            profitLossDaily: 0,
            dividendCash: 0,
            earningsPer10000: 0.7181,
            sevenDaysAnnualizedYield: 3.106,
            proportion: 0,
            rebalanceEnable: 'Y',
            fundType: 'fund',
            productFullName: '平安大华金管家货币市场基金',
            subscriptionBuySettleLagDay: 1,
            redemptionSettleLagDay: 1,
            subscriptionBuyConfirmLagDay: 1,
            redemptionConfirmLagDay: 1,
            productRiskRating: 1,
            profitLossAccumulated: 0.97,
            performance: 0,
            accumulatedPerformance: 0.00099836265178173357537247545267636915,
            cashDefault: 'Y',
            isRapidSell: 'Y',
            estimateDividendAmount: 0,
            investorDesensitizeId: '6fb4fe231ae90736e054b0992898c08c',
            investorBankDetailsId: 2080
          },
          {
            investorId: 16200,
            portfolioId: 4065901,
            productId: 9218,
            ifaCompanyId: 2150,
            portfolioName: '现金钱包',
            productName: '平安大华金管家货币',
            productCodeId: 9468,
            chargeMode: 'frontend_load',
            dividendInstruction: 'reinvest',
            price: 1,
            showedDate: 1560873600000,
            navDate: 1560614400000,
            holdingsUnits: 0,
            availableUnits: 0,
            investmentAmount: 0,
            currentAmount: 10000.0,
            profitLoss: 0.0,
            profitLossPercent: 0,
            undistributeMonetaryIncome: 0,
            productCode: '003465',
            unitTxSpread: 0.01,
            intraSwitchEnable: 'Y',
            interSwitchEnable: 'N',
            switchEnable: 'N',
            sellEnable: 'N',
            buyEnable: 'Y',
            hkMacTwEnable: 'N',
            overseasEnable: 'N',
            minRetainUnits: 0,
            minRedemptionUnits: 0,
            maxRedemptionUnits: 999999999,
            mainCode: 'MM',
            intransitAssets: 10000,
            profitLossDaily: 0,
            dividendCash: 0,
            earningsPer10000: 0.7181,
            sevenDaysAnnualizedYield: 3.106,
            proportion: 0,
            rebalanceEnable: 'Y',
            fundType: 'fund',
            productFullName: '平安大华金管家货币市场基金',
            subscriptionBuySettleLagDay: 1,
            redemptionSettleLagDay: 1,
            subscriptionBuyConfirmLagDay: 1,
            redemptionConfirmLagDay: 1,
            productRiskRating: 1,
            profitLossAccumulated: 0,
            performance: 0,
            accumulatedPerformance: 0,
            cashDefault: 'Y',
            isRapidSell: 'Y',
            estimateDividendAmount: 0,
            investorDesensitizeId: '6fb4fe231ae90736e054b0992898c08c',
            intransitAssetsProfitDate: 1560926619000,
            investorBankDetailsId: 3542800
          }
        ]
      });
    }, 3000);
  });

/** 获取钱包总资产 */
/**
 * currentAmount：总金额
 * intransitAssets：在途资产，不可用金额
 * */
export const getWalletHoldingsStatistic = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          investmentAmount: 13.82,
          currentAmount: 10013.93, // 总金额
          profitLoss: 1.11,
          profitLossPercent: 8.0318,
          profitLossDaily: 0,
          intransitAssets: 10000, // 在途资产，不可用金额
          showedDate: 1560873600000,
          dividendCash: 0,
          intransitContractCount: 1,
          profitLossAccumulated: 1.1,
          estimateDividendAmount: 0
        }
      });
    }, 3000);
  });

/** 获取账户银行卡信息 */
/**
 * bank：银行卡名称
 * bankAccountNumber：银行卡号
 * investorBankDetailsId：银行卡ID
 * */
export const findInvestorBankDetailsToSell = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            bank: '中国建设银行',
            bankCode: 'CCB',
            bankLogo: 'bank-CCB-s.png',
            bankImage: 'bank-CCB.png',
            bankBondingImage: 'bank-CCB-xs.png',
            bankAccountNumber: '4682032060988888',
            status: 'active',
            investorBankDetailsId: 2080,
            preferred: 'N',
            bankId: -2,
            limitUpgrade: false
          },
          {
            bank: '中国工商银行',
            bankCode: 'ICBC',
            bankLogo: 'bank-ICBC-s.png',
            bankImage: 'bank-ICBC.png',
            bankBondingImage: 'bank-ICBC-xs.png',
            bankAccountNumber: '6215593700011926793',
            status: 'active',
            investorBankDetailsId: 3542951,
            preferred: 'N',
            bankId: -12,
            limitUpgrade: false
          },
          {
            bank: '渤海银行',
            bankCode: 'BOHAIB',
            bankLogo: 'bank-BOHAIB-s.png',
            bankImage: 'bank-BOHAIB.png',
            bankBondingImage: 'bank-BOHAIB-xs.png',
            bankAccountNumber: '6228845770024421',
            status: 'active',
            investorBankDetailsId: 3542954,
            preferred: 'N',
            bankId: 2100,
            limitUpgrade: false
          },
          {
            bank: '渤海银行',
            bankCode: 'BOHAIB',
            bankLogo: 'bank-BOHAIB-s.png',
            bankImage: 'bank-BOHAIB.png',
            bankBondingImage: 'bank-BOHAIB-xs.png',
            bankAccountNumber: '6214535315158000',
            status: 'active',
            investorBankDetailsId: 3542952,
            preferred: 'Y',
            bankId: 2100,
            limitUpgrade: false
          },
          {
            bank: '中国银行',
            bankCode: 'BOC',
            bankLogo: 'bank-BOC-s.png',
            bankImage: 'bank-BOC.png',
            bankBondingImage: 'bank-BOC-xs.png',
            bankAccountNumber: '6013822000618141132',
            status: 'active',
            investorBankDetailsId: 3542800,
            preferred: 'N',
            bankId: -1,
            limitUpgrade: false
          }
        ]
      });
    }, 3000);
  });

/** 获取银行卡图片的api
 *
 * https://trial.ifastps.com.cn/fe/rest/bank/get-bank-picture/ 加上对应的bakImage
 *
 */
// https://trial.ifastps.com.cn/fe/rest/bank/get-bank-picture/bank-CCB.png

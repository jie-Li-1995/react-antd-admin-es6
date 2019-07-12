import axios from './config'
import qs from 'qs'

axios.defaults.baseURL = 'API'
axios.defaults.withCredentials = true

function get (api) {
  return body => axios.get(api, {
    params: body
  })
}

function post (api) {
  return body => axios.post(api, qs.stringify(body))
}

export const ArticleApi = {
  AddArticle: post('/Article/AddArticle'),
  EditArticle: post('/Article/EditArticle'),
  EditArticleStatusId: post('/Article/EditArticleStatusId'),
  GetArticle: get('/Article/GetArticle'),
  GetArticles: get('/Article/GetArticles'),
  ViewArticles: get('/Article/ViewArticlePermissionForWeb'),
  EditArticleStatus: post('/Article/EditArticleStatus'),
  // 留言
  GetLeaveComments: get('/LeaveComments/GetLeaveCommentss'),
  EditLeaveCommentsStatusId: post('/LeaveComments/EditLeaveCommentsStatusId')
}

export const ColumnApi = {
  GetAllColumns: get('/Column/GetAllColumns'),
  GetColumns: get('/Column/GetColumns'),
  GetColumn: get('/Column/GetColumn'),
  AddColumn: post('/Column/AddColumn'),
  EditColumn: post('/Column/EditColumn'),
  EditColumnStatusId: post('/Column/EditColumnStatusId')
}
// 系统模板
export const ChecklistTemplateApi = {
  GetChecklistTemplateCategorys: get('/ChecklistTemplateCategory/GetChecklistTemplateCategorys'),
  GetChecklistTemplates: get('/ChecklistTemplate/GetChecklistTemplatesBySales')
}
// 用户自定义模板
export const ChecklistInstanceApi = {
  GetChecklistInstances: get('/ChecklistInstance/GetChecklistInstances'),
  GetChecklistInstanceCategorys: get('/ChecklistInstanceCategory/GetChecklistInstanceCategorys'),
  GetMyselfChecklistInstances: get('/ChecklistInstance/GetMyselfChecklistInstances'),
  AddChecklistInstance: post('/ChecklistInstance/AddChecklistInstance'),
  EditChecklistInstanceCategorys: post('/ChecklistInstanceCategory/EditChecklistInstanceCategorys'),
  EditChecklistInstanceIds: post('/ChecklistInstance/EditChecklistInstanceIds'),
  GetSalesChecklistInstancesByLetter: get('/ChecklistInstance/GetSalesChecklistInstancesByLetter')
}

// 行业管理
export const IndustriesApi = {
  GetSalesSubIndustries: get('/Industry/GetSalesSubIndustries'),
  GetVisitRecordRequestDescription: get('/Industry/GetVisitRecordRequestDescription'),
  GetIndustries: get('/Industry/GetIndustries')
}
// 客户公司管理
export const CompanyApi = {
  Companies: get('/Company/Companies'),
  SearchCompany: get('/CRM/SearchCompany'),
  GetCompanyBySales: get('/Company/GetCompanyBySales')
}

export const UploadApi = {
  UploadFile: 'API/File/UploadFile',
  UploadFileReturnId: 'API/File/FilesUploadByIdAndName'
}

export const example = {
  getResource: get('/example'),
  updateResource: post('/example')
}
// user management api
export const UserApi = {
  GetApprovals: get('/Account/GetApprovals'),
  GetApproval: get('/Account/GetApproval'),
  VerificationCode: get('/Account/VerificationCode'), // 验证激活码是否有效
  ActiveAccount: post('/Account/Activation'), // 激活帐号
  Approved: post('/Account/Approved'), // 点击审批的数据
  ChangeApprovalStatus: post('/Account/ChangeApprovalStatus'), // 拒绝
  SearchSFLLUserApprovals: post('/Account/SearchSFLLUserApprovals'), // 获取SFLL User审批列表
  SFLLUserApproved: post('/Account/SFLLUserApproved'), // SFLL User用户账号审批
  CustomerApproved: post('/Account/CustomerApproved'), // Customer用户账号审批
  GetApprovalStatus: post('/Account/GetApprovalStatus'),
  CreatePassword: post('/Account/CreatePassword'),
  SearchCustomerApprovals: post('/Account/SearchCustomerApprovals'),
  SearchVendorApprovals: post('/Account/SearchVendorApprovals'),
  VendorApproved: post('/Account/VendorApproved'),
  // 获得所有分组
  GetRole: get('Role/SFLLUserRoleDisplay'),
  GetSalesGroupList: get('/Sales/GetSalesGroupList'),
  GetIndustry: get('/Industry/AvailableParent'),
  GetAllVendorSalesGroups: get('/VendorSalesGroup/GetAllVendorSalesGroups'),
  GetAllSalesList: get('/Sales/GetAllSalesList'),
  GetSalesList: get('/Sales/GetSalesList'),
  GetAllCompany: get('/Company/Available'),
  GetSalesGroups: get('/CRM/ViewAllSalesGroupMessage'),
  // 获得customer
  SearchCustomerEmployee: post('/CustomerEmployee/Search'),
  FindCustomerEmployee: post('/CustomerEmployee/Find'),
  EditCustomerEmployee: post('/CustomerEmployee/Edit'),
  // 获得sales
  SearchSFLLSales: post('/Account/Search'),
  EditSFLLSales: post('/Account/Edit'),
  // 获得Vendor
  SearchVendorSales: post('/VendorSales/Search'),
  EditVendorSales: post('/VendorSales/Edit'),
  // 获得Vendor公司
  getVendorCompany: get('/Vendor/Available'),
  // Account删除
  ChangeAccountStatus: post('Account/AccountToDeleteStatus'),
  // Vendor Group
  GetAllVendorSaless: get('/VendorSales/GetAllVendorSaless'),
  GetVendorSalesGroups: get('/VendorSalesGroup/GetVendorSalesGroups'),
  AddVendorSalesGroup: post('/VendorSalesGroup/AddVendorSalesGroup'),
  EditVendorSalesGroup: post('/VendorSalesGroup/EditVendorSalesGroup'),
  GetVendorSalesGroup: get('/VendorSalesGroup/GetVendorSalesGroup'),
  EditVendorSalesGroupStatusId: post('/VendorSales/EditVendorSalesGroupStatusId'),
  // Sales Group
  GetSalesGroupsByPage: get('/Sales/GetSalesGroupsByPage'),
  SaveSalesGroupInfo: post('/Sales/SaveSalesGroupInfo'),
  DeleteSalesGroup: post('/Sales/DeleteSalesGroup'),
  GetSalesGroupInfoByGroupId: get('/Sales/GetSalesGroupInfoByGroupId'),
  GetGroupLeaderList: get('/Sales/GetGroupLeaderList'),
  // disable enable
  AccountToDisabledStatus: post('/Account/AccountToDisabledStatus'),
  AccountToEnabledStatus: post('/Account/AccountToEnabledStatus'),
  // 不通过申请，直接创建SFLL User账户，并设置相关信息（包括登录密码)
  CreateSales: post('/Account/Create'),
  getSaEmail: get('/Account/GetAllSA')
}
// visit api
export const VisitApi = {
  GetCRMVisitRecords: get('/CRM/GetCRMVisitRecords'),
  SearchCompany: get('/CRM/SearchCompany'), // 公司搜索自动补全
  GetCRMVisitRecord: get('/CRM/GetCRMVisitRecord'), // 获取一条记录
  DeleteVisitRecord: post('/CRM/DeleteVisitRecord'), // 删除
  SaveVisitRecord: post('/CRM/SaveVisitRecord'), // 保存
  SubmitVisiSFLLLogintRecord: post('/CRM/SubmitVisitRecord'), // submit
  GetSalesIndustries: get('/Industry/GetSalesIndustries'),
  GetProvinces: get('/Province/GetProvinces'),
  GetVisitRecordRequestDescription: get('/Industry/GetVisitRecordRequestDescription'),
  GetVisitPurposes: get('/VisitPurpose/GetVisitPurposes'), // visitList页面搜索条件
  GetSales: get('/Sales/GetSales'),
  GetVisitTemplates: get('CRM/GetTemplateList'),
  ExportWord: post('CRM/ExportVisitRecord'),
  GetTypes: get('ContactUser/GetTypes')
}
// Login
export const LoginApi = {
  SFLLLogin: post('/Account/SFLLLogin'),
  SFLLADLogin2: post('/Account/SFLLADLogin'),
  SFLLADLogin: get('/Account/Get')
}

// Prject
export const ProjectApi = {
  getProjects: get('/CRM/GetCRMProjects')
}

// Calculators
export const CalculationApi = {
  PMT: get('/Calculator/PMTCalculationResult'),
  IRR: get('/Calculator/IRRCalculationResult'),
  CreateStandard: post('/Calculator/SaveStandardVersionCalculator'),
  EditStandard: post('/Calculator/EditStandardVersionCalculator'),
  ViewStandard: get('/Calculator/GetStandardVersionCalculator'),
  DeleteStandard: post('/Calculator/DeleteStandardVersionCalculator'),
  ViewAllStandard: get('/Calculator/ViewStandardListToWeb'),
  ViewInsuranceList: get('/Calculator/ViewInsuranceList'),
  ViewInsurance: get('/Calculator/ViewInsurance'),
  // IN
  CrateIN: post('/Calculator/SaveForfeitingINCalculator'),
  EditIN: post('/Calculator/EditForfeitingINCalculator'),
  ViewIN: get('/Calculator/GetForfeitingINCalculator'),
  DeleteIN: post('/Calculator/DeleteForfeitingINCalculator'),
  ViewAllIN: get('/Calculator/ViewForfeitingINListToWeb'),
  // HC
  CrateHC: post('/Calculator/SaveForfeitingHCCalculator'),
  EditHC: post('/Calculator/EditForfeitingHCCalculator'),
  ViewHC: get('/Calculator/GetForfeitingHCCalculator'),
  DeleteHC: post('/Calculator/DeleteForfeitingHCCalculator'),
  ViewAllHC: get('/Calculator/ViewForfeitingHCListToWeb'),
  // STF
  CrateSTF: post('/Calculator/SaveSTFCalculator'),
  EditSTF: post('/Calculator/EditSTFCalculator'),
  ViewSTF: get('/Calculator/GetSTFCalculator'),
  DeleteSTF: post('/Calculator/DeleteSTFCalculator'),
  ViewAllSTF: get('/Calculator/ViewSTFCalculatorListToWeb'),
  // ExportStandardCalculator 计算器导出
  ExportStandardCalculator: post('/Excel/ExportStandardCalculator')
}

// Solution Inquery
export const InquiryApi = {
  BD: {
    GetInquiries: get('/Inquiry/BDGetInquirySolutionByPage'),
    GetInquiryDetail: get('/Inquiry/BDGetInquiryDetail')
  },
  Sales: {
    GetInquiries: get('/Inquiry/SalesGetInquirySolutionByPage'),
    GetInquiryDetail: get('/Inquiry/SalesGetInquiryDetail')
  },
  GetSales: get('/Inquiry/GetSalesListByIndustry'),
  AssignInquiryToSales: post('/Inquiry/BDAssignInquiryByID'),
  CloseInquiry: post('/Inquiry/SalesCloseInquiryByID')
}

// Statistics
export const StatisticsApi = {
  GetSMVisitRecordStatisticsBySales: get('/CRM/GetSMVisitRecordStatisticsBySales'),
  GetSMVisitRecordStatisticsByPurpose: get('/CRM/GetSMVisitRecordStatisticsByPurpose'),
  GetSalesVisitRecordStatisticsForSixMonth: get('/CRM/GetSalesVisitRecordStatisticsForSixMonth'),
  GetHSViewVisitRecordCountPieChartByIndustryForMobile: get('/CRM/HSViewVisitRecordCountPieChartByIndustryForMobile'),
  GetHSViewVisitRecordCountPieChartBySalesGroupForMobile: get('/CRM/HSViewVisitRecordCountPieChartBySalesGroupForMobile'),
  GetHSViewVisitRecordCountColumnChartBySalesGroupForMobile: get('/CRM/HSViewVisitRecordCountColumnChartBySalesGroupForMobile')
}

export const LimitedApi = {
  GetApplicationAmountsBySales: get('ApplicationAmount/GetApplicationAmountsBySales'),
  PostEditApplicationAmountStatusId: post('ApplicationAmount/EditApplicationAmountStatusId'),
  GetApplicationAmount: get('ApplicationAmount/GetApplicationAmount')
}

export const CommentApi = {
  GetArticleCommentss: get('ArticleComments/GetArticleCommentss'),
  EditArticleCommentsStatusId: post('ArticleComments/EditArticleCommentsStatusId'),
  AddArticleComments: post('ArticleComments/AddArticleComments')
}

// System
export const SystemApi = {
  regulation: {
    GetRegulation: get('/MobileAgreement/GetMobileAgreements'),
    EditRegulation: post('/MobileAgreement/EditMobileAgreement')
  },
  GetPaymentReminderDays: get('/System/GetPaymentReminderDays'),
  UpdatePaymentReminderDays: post('/System/ChangePaymentReminderDays'),
  AddChecklistTemplate: post('/ChecklistTemplate/AddChecklistTemplate'),
  EditChecklistTemplate: post('ChecklistTemplate/EditChecklistTemplate'),
  EditTemplateStatusId: post('/ChecklistTemplate/EditTemplateStatusId'),
  GetChecklistTemplates: get('/ChecklistTemplate/GetChecklistTemplates'),
  // 获取模版，下拉选择用，
  GetAllChecklistTemplates: get('/ChecklistTemplate/GetAllChecklistTemplates'),
  AddVendor: post('/Vendor/AddVendor'),
  EditVendor: post('/Vendor/EditVendor'),
  EditVendorStatusId: post('/Vendor/EditVendorStatusId'),
  GetVendors: get('/Vendor/GetVendors')
}

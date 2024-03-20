import { GET_COLLECTION_KYC_STATUS, GET_MEMBER_KYC_STATUS, GET_SPACE_KYC_STATUS, GET_TOKEN_KYC_STATUS } from "./api"

export const CATEGORIES = {
    MEMBER: 'MEMBER',
    TOKEN: 'TOKEN',
    COLLECTION: 'COLLECTION',
    SPACE: 'SPACE'
}

export const CATEGORY_LIST = [CATEGORIES.MEMBER, CATEGORIES.TOKEN, CATEGORIES.COLLECTION, CATEGORIES.SPACE];

export const CATEEGORIES_PROPS = {
    [CATEGORIES.MEMBER]: {
        displayName: 'Member',
        inputFormTitle: 'Please enter member id',
        content: 'Check the kyc status of member',
        endPoint: GET_MEMBER_KYC_STATUS
    },
    [CATEGORIES.TOKEN]: {
        displayName: 'Token',
        inputFormTitle: 'Please enter token id',
        content: 'Check the kyc status of token',
        endPoint: GET_TOKEN_KYC_STATUS
    },
    [CATEGORIES.COLLECTION]: {
        displayName: 'Collection',
        inputFormTitle: 'Please enter collection id',
        content: 'Check the kyc status of collection',
        endPoint: GET_COLLECTION_KYC_STATUS
    },
    [CATEGORIES.SPACE]: {
        displayName: 'Space',
        inputFormTitle: 'Please enter space id',
        content: 'Check the kyc status of space',
        endPoint: GET_SPACE_KYC_STATUS
    }
}
export class ApiEndPoints {
    public static AUTH = {
        LOGIN: '/user/login/',
        PASSWORD_RESET: '/user/forgotPassword/',
        PASSWORD_RESET_CONFIRM: '/user/resetPassword/',
        LOGOUT: '/user/logout/',
        USER_REGISTER: '/user/usersignup/',
        USER_MODIFY: '/user/usermodify/%s/',
        CHECK_EMAIL_EXISTS: '/user/exists/email/',
        CHECK_NICKNAME_EXISTS: '/user/exists/username/',
        SIGNUP_DEPS: '/user/signupdeps/'

    }
    public static CATEGORY = {
        MARKETPLACE_CATEGORIES: '/product/categories?limit=%s',
        MARKETPLACE_CATEGORIES_BY_ID: '/product/categoryModify/',
        BOOKING_CATEGORIES: '/booking/categories?limit=%s',
        BOOKING_CATEGORIES_BY_ID: '/booking/modifyServiceCategory/%d/',
        BOOKING_CATEGORIES_BY_CATEGORY: '/booking/addService?category=%s',
        SERVICE_CATEGORIES_BY_ID: '/booking/addService?id=%s',

        CATEGORY_PRODUCTS: '/product/productInfo?category=%s',
        CATEGORIES: '/product/categories?is_parent=%s',
        POPULAR_MARKETPLACE: '/product/productInfo/?popular=true',
    };
    public static BOOKING = {
        MEMBERS: '/booking/addMember/',
        SERVICE: '/booking/addService/',
        BEST_BOOKINGS: '/booking/bestBookings/',
        BOOKING_PRIVATE: '/booking/cart/myHistory/',
        SERVICE_CATEGORIES: '/booking/serviceCategory/',
        EDIT_SERVICE_CATEGORIES: '/booking/modifyServiceCategory/%d/',
        ADD_SHOP: '/booking/addShop/',
        NEAR_YOU: '/booking/nearbyshops/',
        BOOKINGS_BY_CATEGORY: '/booking/shopFilters/?category=%s',
        BOOKINGS_BY_ALPHA: '/booking/categories/?startswith=%s',
        GET_SERVICES_LIST: '/booking/serviceList/%s/',

    };

    public static USER = {
        BILLING_ADDRESS: '/user/billingaddress/',
        BILLING_ADDRESS_MODIFY: '/user/billingaddressmodify/%s/',
        PASSPORT_ADDRESS_MODIFY: '/user/passportaddressmodify/%s/',
        PASSPORT_ADDRESS: '/user/passportaddress/',
        MEMBERSHIP: '/user/vendormodify/%s/',
        SIGNUP_DEPS: '/user/signupdeps/',
        REGISTER_USER: '/user/usersignup/',
        BUSINESS_PROFILE_REGISTER: '/user/createbussinessprofile/',
        PUBLIC_PROFILE_REGISTER: '/user/createpublicprofile/',
        BUSINESS_MEMBER: '/user/bussinessprofilemodify/%s/',
        PUBLIC_MEMBER: '/user/rudpublicprofile/%s/',
        USER_INFO: '/user/usermodify/%s/',
        CHECK_EMAIL_EXISTS: '/user/exists/email/',
        CHECK_NICKNAME_EXISTS: '/user/exists/username/',
        ADD_PHONE: '/user/addphonenumber/',
        VERIFY_PHONE: '/user/phonenumber/verify/',
        SEND_VERIFY_EMAIL : '/user/sendAccountVerifyEmail/',
        VERIFY_ACCOUNT: '/user/accountVerify/'
    };
    
    public static PRODUCT = {
        PRODUCT_MODIFY: '/product/productModify/%s/',
        GET_PRODUCT_FROM_SELLER: '/product/productInfo?seller_id=%s',
        FAVOURITE: '/product/favProduct/',
        REMOVE_FAVOURITE: '/product/removeFavProduct?product_id=%s&&user_id=%s',
        SAVE_SELLER: '/product/saveSeller/',
        SAVED_SELLER_BY_USER: '/product/saveSeller?user_id=%s',
        SAVE_SELLER_MODIFY: '/product/saveSellerModify/%s',
        GET_REVIEW: '/product/addReview/?product_id=%s',
        ADD_REVIEW: '/product/addReview/',
        GET_REVIEW_BY_SELLER_ID: '/product/addReview/?seller_id=%s',
        NEEDED_TO_REVIEW: '/product/getProductsNeedForReview/%s/',
        NEWEST_REVIEW: '/product/addReview/?seller_id=%s&order_by_latest=true',
        SIMILAR_PRODUCT: '/product/similarproducts/%s/',
        MODIFY_SAVED_SEARCH: '/product/modifySaveSearch/%s/',
        SEARCH_PRODUCT_BY_KEYWORD: '/product/productInfo/?q=%s',

        ASK_QUESTION: '/product/askQuestion/',
        ADD_REVIEW_IMAGE: '/product/ReviewImage/',
        CONDITION: '/product/condition/',
        QA_LIMITED: '/product/customerqna/%s?limit=%d',
        QA_ALL: '/product/customerqna/%s',
        COLORS: '/product/color/',

        ADD_ANSWER: '/product/addAnswer/',
        ADD_REPLY: '/product/addreply/',

        ASK_FOR_CHANGE: '/product/askforchange/',
        REVIEW_REPLY: '/product/addReviewReply/',
        ADD_PRODUCT: '/product/addProduct/',
        SHIP_TO: '/product/shipto/',
        PRODUCT_LOCATION: '/product/productLocation/',
        ADD_TO_CART: '/product/cart/marketplace/addItem/',
        GET_CART: '/product/cart/onCartItems/',
        REMOVE_ITEM_FROM_CART: '/product/cart/marketplace/removeItem/',
        CLEAR_CART: '/product/cart/marketplace/allClearItem/',

        CATEGORY_ATTRIBUTES: '/product/addCategoryAttribute/',
        BID_DETAILS: '/product/bidDetails/%s/',
        ADD_BID: '/product/addBid/',
        DEAL: '/product/deal/',
        TOP_DEALS: '/product/topDeals/',
        CATEGORIES_BY_ALPHA: '/product/categories/?startswith=%s',

        ADD_CATEGORY_ATTRIBUTE: '/product/addProductVariation',
        ADD_CATEGORY_ATTRIBUTE_IMAGES: '/product/productVariationRUD/',
        ADD_ATTRIBUTE_OPTION: '/product/addAttributeValue',

        UPDATE_QUANTITY_MARKET: '/product/cart/marketplace/updateQuantity/'

    };

    public static PAYMENT = {
        SUBSCRIPTION_PLAN: '/payments/getPlans/',
        ADD_CARD: '/payments/addUserCard/',
        ADD_SUBSCRIPTION: '/payments/addUserSubcription/',
        CHECK_COUPON: '/payments/checkCoupon/'
    };

    public static BOOK_PRODUCT = {
        PRODUCT_DETAILS: '/booking/shopModify/%s',
        PRODUCT_REVIEWS: '/booking/addreview/?shop_id=%s',
        PRODUCT_REVIEWS_NEWEST: '/booking/addreview/?shop_id=%s&&order_by_latest=true',
        SIMILAR_PRODUCTS: '/booking/similarShops/%s',
        SERVICES_BY_CATEGORY: '/booking/serviceByCategory/?shop_id=%s',
        SHOP_WORK_IMAGES: '/booking/shopWorkImage/?shop_id=%s',
        SUBMIT_REVIEW: '/booking/addreview/',
        CHECK_REVIEWS: '/booking/getServicesNeedToReview/%s/%s',
        ADD_TO_FAVOURITES: '/booking/favShop',
        CHECKOUT_PAY: '/booking/cart/online/checkout/',
        
        SERVICE_DETAILS: '/booking/addService/?id=%s',
        SERVICE_DETAILS_BY_SHOP: '/booking/addService/?shop_id=%s',
        ALL_SERVICE_BY_SHOP: '/booking/ListShopServices/?seller_id=%s',

        // online 
        BOOKING_ONLINE_ADDSERVICE: '/booking/cart/online/addService/',
        BOOKING_ONLINE_ONCART: '/booking/cart/online/oncart/',
        POST_ONLINE_DELETESERVICE: '/booking/cart/online/deleteService/%s/',

    }
    public static DASHBOARD = {
        PUBLIC_PROFILE: '/user/dashboard/PublicProfileDetails/',
        NAME_AND_REVIEW_STATUS: '/user/dashboard/NameAndReviewStatus/%s/',
        FAMILY_MEMBERS: '/user/dashboard/FamilyMembers/',
        LIST_BLACKLIST_MEMBER: '/user/dashboard/ListBlacklistMember/',
        ADD_FAMILY_MEMBER: '/user/usersignup/',
        MY_FAVS: '/user/dashboard/MyFavs/',
        EDIT_FAMILY_MEMBER: '/user/dashboard/EditFamilyMember/%s/',
        DELETE_FAMILY_MEMBER: '/user/dashboard/EditFamilyMember/%s/',
        FOLLOWERS: '/user/follow/',
        DELETE_BLACKLIST: '/user/dashboard/EditBlacklistMember/%s/',
        MY_ORDERS: '/user/dashboard/MyOrderPage/',
        BOOKING_STATISTICS: '/booking/dash/statistics/',
        TOP_CLIENTS: '/booking/dash/topClients/',
        TOP_MEMBERS: '/booking/dash/topMembers/',
        CLIENTS_ADD_CLIENT: '/booking/addClient/',
        GET_CLIENTS: '/booking/addClient/?shop_id=%s',
        UPDATE_CLIENT: '/booking/clientModify/%s/',
        DELETE_CLIENT: '/booking/clientModify/%s/',
        BOOKING_PRIVATE_CURRENT_HISTORY: '/booking/dash/bookingHistory/?limit=%s&offset=%s&user_book_services__user_id=%s&finished=%s&cancel=%s&get_date=%s',
        MY_SAVED_SEARCHES: '/user/dashboard/MySavedSearches/',
        DAILY_VISITS: '/user/dashboard/visit/report/daily/%s',
        WEEKLY_VISITS: '/user/dashboard/visit/report/weekly/%s/%s',
        OPEN_ASSETS: '/user/dashboard/OpenAssets/',
        PRODUCT_INFO: '/product/productInfo/?seller=%s',
        
        // company tab
        GET_ADD_SHOP: '/booking/addShop/',
        GET_SHOP_MODIFY: '/booking/shopModify/%s/',
        GET_SERVICE_CATEGORY: '/booking/serviceCategory/?shop_id=%s',
        POST_SERVICE_CATEGORY: '/booking/serviceCategory/',
        POST_ADD_SERVICE: '/booking/addService/',
        GET_ADD_SERVICE: '/booking/addService/?shop_id=%s&category_name=%s',
        GET_ADD_MEMBER: '/booking/addMember/?shop_id=%s',
        GET_SHOP_RATING_INFO: '/user/shopRatingInfo/%s/',
        POST_PUSH_BOOKING: '/booking/dash/pushBooking/',
        POST_LAST_MINUTE_DISCOUNT: '/booking/dash/lastMinuteDiscount/',
        POST_INVITE_SEND: '/booking/iviteClient/',
        GET_HAPPY_HOUR_DISCOUNT_SELECT_DAY: '/booking/dash/happyHourDiscountSelectDay/',
        POST_HAPPY_HOUR_DISCOUNT: '/booking/dash/happyHourDiscount/',
        POST_FLASH_SALE: '/booking/dash/flashDiscount/',

        // settings tab
        GET_BASICSETTINGS: '/booking/basicSettings/?shop_id=%s',
        POST_BASICSETTINGS: '/booking/basicSettings/',

        // portfolio tab
        GET_SHOPWORK_IMAGE: '/booking/shopWorkImage/?shop_id=%s',
        POST_SHOPWORK_IMAGE: '/booking/shopWorkImage/',
        DELETE_MODIFY_SHOPWORK_IMAGE: '/booking/modifyShopWorkImage/%s/',

        // marketplace -> donations tab

        GET_DONATION_STATS: '/user/dashboard/Donation/',
        DONATION_HISTROY: '/user/dashboard/DonationHistory/',
        // members tab
        GET_LIST_MEMBERS: '/user/dashboard/ListMembers/',
        POST_ADD_MEMBER: '/dashboard/AddMember/',
        PUT_UPDATE_MEMBER: '/dashboard/EditMember/%s/',
        DELETE_MEMBER: '/dashboard/EditMember/%s/',
        DELETE_BOOKINGMEMBER: '/user/dashboard/EditMember/%s/',
        
        //booking    
        PUT_UPDATE_BOOKINGMEMBER: '/user/dashboard/EditMember/%s/',

        //offline
        POST_OFFLINE_QUICKBOOKINGCLIENT: '/booking/cart/offline/quickBookingClient/',
        PATCH_OFFLINE_QUICKBOOKINGCLIENT: '/booking/cart/offline/quickBookingClient/%s/',
        POST_OFFLINE_MYHISTORYUPCOMING: '/booking/cart/offline/myHistoryUpcoming/',
        POST_OFFLINE_MYHISTORCURRENT: '/booking/cart/offline/myHistoryCurrent/',
        POST_OFFLINE_MYHISTORYPREVIOUS: '/booking/cart/offline/myHistoryPrevious/',
        POST_OFFLINE_ADDSERVICE: '/booking/cart/offline/addService/',
        POST_OFFLINE_MODIFIEDSERVICE: '/booking/cart/offline/modifyService/',
        POST_OFFLINE_DELETESERVICE: '/booking/cart/offline/deleteService/%s/%s/',
        POST_OFFLINE_APPLYDISCOUNT: '/booking/cart/offline/applyDiscount/',
        POST_OFFLINE_APPLYTIPCASH: '/booking/cart/offline/applyTipCash/',
        POST_OFFLINE_APPLYTIPPERCENT: '/booking/cart/offline/applyTipPercent/',
        POST_OFFLINE_ONCART: '/booking/cart/offline/oncart/',
        POST_OFFLINE_CONFIRM: '/booking/cart/offline/confirm/',
        POST_OFFLINE_CANCELCART: '/booking/cart/offline/cancelCart/',
    };
}
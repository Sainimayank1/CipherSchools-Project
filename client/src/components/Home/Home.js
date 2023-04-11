import React from 'react'
import style from "./style.module.css"
import Profile from './ProfieSection/Profile'
import Details from './Details/Details'

function Home() {
  return (
    <div  className={style.main}>
      <div className={style.left}>
            <div className={style.left_sub}>
            <svg width="20" height="20" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon"><path d="M27.4205 13.1638L14.6986 0.392491C14.607 0.300287 14.4982 0.227136 14.3784 0.177225C14.2586 0.127314 14.1302 0.101624 14.0006 0.101624C13.8709 0.101624 13.7425 0.127314 13.6227 0.177225C13.503 0.227136 13.3942 0.300287 13.3026 0.392491L0.580655 13.1638C0.210024 13.5362 0 14.042 0 14.5694C0 15.6648 0.886425 16.5553 1.9767 16.5553H3.31715V25.6684C3.31715 26.2176 3.75881 26.6613 4.30549 26.6613H12.0239V19.7109H15.4831V26.6613H23.6957C24.2423 26.6613 24.684 26.2176 24.684 25.6684V16.5553H26.0245C26.5495 16.5553 27.053 16.3474 27.4236 15.9719C28.1926 15.1962 28.1926 13.9396 27.4205 13.1638Z" fill="black"></path></svg>
            <h4>Home</h4>
            </div>

            <div className={style.left_sub}>
              <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon"><path d="M6.97453 0H1.51029C1.10974 0 0.725588 0.159114 0.442353 0.442349C0.159118 0.725583 0 1.10974 0 1.51029V25.0316C0 25.4321 0.159118 25.8163 0.442353 26.0995C0.725588 26.3828 1.10974 26.5419 1.51029 26.5419H6.97453C7.37508 26.5419 7.75923 26.3828 8.04247 26.0995C8.3257 25.8163 8.48482 25.4321 8.48482 25.0316V1.50425C8.48322 1.10474 8.3234 0.72214 8.04034 0.44021C7.75728 0.158281 7.37404 -3.19604e-06 6.97453 0ZM7.00474 22.156C6.94997 22.2117 6.88461 22.2559 6.8125 22.286C6.7404 22.3161 6.66301 22.3314 6.58488 22.3312H1.89995C1.78377 22.3273 1.67117 22.2901 1.57565 22.2238C1.48013 22.1576 1.40575 22.0652 1.36142 21.9577C1.3171 21.8503 1.30472 21.7323 1.32577 21.618C1.34682 21.5037 1.4004 21.3979 1.48008 21.3132C1.53465 21.2573 1.59997 21.2129 1.67212 21.1828C1.74427 21.1526 1.82177 21.1374 1.89995 21.138H6.58488C6.7451 21.138 6.89876 21.2017 7.01205 21.315C7.12535 21.4283 7.18899 21.5819 7.18899 21.7422C7.18762 21.82 7.17059 21.8967 7.13894 21.9678C7.10728 22.0389 7.06164 22.1029 7.00474 22.156ZM7.00474 19.7576C6.94997 19.8134 6.88461 19.8576 6.8125 19.8876C6.7404 19.9177 6.66301 19.9331 6.58488 19.9328H1.89995C1.78377 19.929 1.67117 19.8917 1.57565 19.8255C1.48013 19.7592 1.40575 19.6669 1.36142 19.5594C1.3171 19.4519 1.30472 19.334 1.32577 19.2197C1.34682 19.1053 1.4004 18.9995 1.48008 18.9149C1.53465 18.8589 1.59997 18.8145 1.67212 18.7844C1.74427 18.7543 1.82177 18.7391 1.89995 18.7397H6.58488C6.7451 18.7397 6.89876 18.8034 7.01205 18.9167C7.12535 19.0299 7.18899 19.1836 7.18899 19.3438C7.18762 19.4216 7.17059 19.4984 7.13894 19.5695C7.10728 19.6406 7.06164 19.7046 7.00474 19.7576ZM7.00474 4.28319C6.94997 4.3389 6.88461 4.3831 6.8125 4.41319C6.7404 4.44328 6.66301 4.45864 6.58488 4.45838H1.89995C1.73972 4.45838 1.58607 4.39473 1.47277 4.28144C1.35948 4.16814 1.29583 4.01448 1.29583 3.85426C1.29583 3.69404 1.35948 3.54038 1.47277 3.42708C1.58607 3.31379 1.73972 3.25014 1.89995 3.25014H6.58488C6.70105 3.25398 6.81365 3.29126 6.90917 3.3575C7.00469 3.42374 7.07907 3.51613 7.1234 3.62359C7.16772 3.73104 7.1801 3.849 7.15905 3.96332C7.13801 4.07764 7.08442 4.18346 7.00474 4.26809V4.28319Z" fill="currentColor"></path><path d="M16.0302 5.41591H10.566C10.1655 5.41591 9.7813 5.57503 9.49807 5.85826C9.21484 6.1415 9.05571 6.52564 9.05571 6.9262V25.0497C9.05571 25.4503 9.21484 25.8344 9.49807 26.1176C9.7813 26.4009 10.1655 26.56 10.566 26.56H16.0302C16.4308 26.56 16.8149 26.4009 17.0982 26.1176C17.3814 25.8344 17.5405 25.4503 17.5405 25.0497V6.9262C17.5405 6.52564 17.3814 6.1415 17.0982 5.85826C16.8149 5.57503 16.4308 5.41591 16.0302 5.41591ZM16.0604 22.7631C16.0057 22.8188 15.9403 22.863 15.8682 22.8931C15.7961 22.9232 15.7187 22.9386 15.6406 22.9383H10.9557C10.7954 22.9383 10.6418 22.8747 10.5285 22.7614C10.4152 22.6481 10.3515 22.4944 10.3515 22.3342C10.3515 22.174 10.4152 22.0203 10.5285 21.907C10.6418 21.7937 10.7954 21.7301 10.9557 21.7301H15.6406C15.7568 21.7339 15.8694 21.7712 15.9649 21.8374C16.0604 21.9037 16.1348 21.9961 16.1791 22.1035C16.2234 22.211 16.2358 22.3289 16.2148 22.4433C16.1937 22.5576 16.1401 22.6634 16.0604 22.748V22.7631ZM16.0604 9.12518C16.0057 9.1809 15.9403 9.2251 15.8682 9.25519C15.7961 9.28527 15.7187 9.30064 15.6406 9.30037H10.9557C10.7954 9.30037 10.6418 9.23673 10.5285 9.12343C10.4152 9.01014 10.3515 8.85648 10.3515 8.69626C10.3515 8.53604 10.4152 8.38238 10.5285 8.26909C10.6418 8.1558 10.7954 8.09214 10.9557 8.09214H15.6406C15.7568 8.09598 15.8694 8.13326 15.9649 8.19949C16.0604 8.26573 16.1348 8.35813 16.1791 8.46558C16.2234 8.57304 16.2358 8.691 16.2148 8.80532C16.1937 8.91963 16.1401 9.02546 16.0604 9.11009V9.12518Z" fill="currentColor"></path><path d="M25.086 0H19.6217C19.2212 0 18.837 0.159114 18.5538 0.442349C18.2705 0.725583 18.1114 1.10974 18.1114 1.51029V25.0316C18.1114 25.4321 18.2705 25.8163 18.5538 26.0995C18.837 26.3828 19.2212 26.5419 19.6217 26.5419H25.086C25.4865 26.5419 25.8707 26.3828 26.1539 26.0995C26.4371 25.8163 26.5963 25.4321 26.5963 25.0316V1.50425C26.5947 1.10474 26.4348 0.72214 26.1518 0.44021C25.8687 0.158281 25.4855 -3.19604e-06 25.086 0ZM25.1162 22.156C25.0614 22.2117 24.996 22.2559 24.9239 22.286C24.8518 22.3161 24.7744 22.3314 24.6963 22.3312H20.0114C19.8952 22.3273 19.7826 22.2901 19.6871 22.2238C19.5916 22.1576 19.5172 22.0652 19.4729 21.9577C19.4285 21.8503 19.4162 21.7323 19.4372 21.618C19.4582 21.5037 19.5118 21.3979 19.5915 21.3132C19.6461 21.2573 19.7114 21.2129 19.7836 21.1828C19.8557 21.1526 19.9332 21.1374 20.0114 21.138H24.6963C24.8565 21.138 25.0102 21.2017 25.1235 21.315C25.2368 21.4283 25.3004 21.5819 25.3004 21.7422C25.299 21.82 25.282 21.8967 25.2504 21.9678C25.2187 22.0389 25.1731 22.1029 25.1162 22.156ZM25.1162 19.7576C25.0614 19.8134 24.996 19.8576 24.9239 19.8876C24.8518 19.9177 24.7744 19.9331 24.6963 19.9328H20.0114C19.8952 19.929 19.7826 19.8917 19.6871 19.8255C19.5916 19.7592 19.5172 19.6669 19.4729 19.5594C19.4285 19.4519 19.4162 19.334 19.4372 19.2197C19.4582 19.1053 19.5118 18.9995 19.5915 18.9149C19.6461 18.8589 19.7114 18.8145 19.7836 18.7844C19.8557 18.7543 19.9332 18.7391 20.0114 18.7397H24.6963C24.8565 18.7397 25.0102 18.8034 25.1235 18.9167C25.2368 19.0299 25.3004 19.1836 25.3004 19.3438C25.299 19.4216 25.282 19.4984 25.2504 19.5695C25.2187 19.6406 25.1731 19.7046 25.1162 19.7576ZM25.1162 4.28319C25.0614 4.3389 24.996 4.3831 24.9239 4.41319C24.8518 4.44328 24.7744 4.45864 24.6963 4.45838H20.0114C19.8512 4.45838 19.6975 4.39473 19.5842 4.28144C19.4709 4.16814 19.4073 4.01448 19.4073 3.85426C19.4073 3.69404 19.4709 3.54038 19.5842 3.42708C19.6975 3.31379 19.8512 3.25014 20.0114 3.25014H24.6963C24.8125 3.25398 24.9251 3.29126 25.0206 3.3575C25.1161 3.42374 25.1905 3.51613 25.2348 3.62359C25.2791 3.73104 25.2915 3.849 25.2705 3.96332C25.2494 4.07764 25.1958 4.18346 25.1162 4.26809V4.28319Z" fill="black"></path></svg>
              <h4>Courses</h4>
            </div>

            <div className={style.left_sub}>
            <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon"><path d="M13.28 11.8192C12.4699 11.8192 11.8192 12.4699 11.8192 13.28C11.8192 14.0901 12.4699 14.7408 13.28 14.7408C14.0901 14.7408 14.7408 14.0901 14.7408 13.28C14.7408 12.4699 14.0901 11.8192 13.28 11.8192ZM13.28 0C5.94944 0 0 5.94944 0 13.28C0 20.6106 5.94944 26.56 13.28 26.56C20.6106 26.56 26.56 20.6106 26.56 13.28C26.56 5.94944 20.6106 0 13.28 0ZM16.1883 16.1883L5.312 21.248L10.3717 10.3717L21.248 5.312L16.1883 16.1883Z" fill="black"></path></svg>
            <h4>Trending</h4>
            </div>

            <div className={style.left_sub}>
            <svg width="20" height="20" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon"><path d="M0 21.886C0.0717424 21.4673 0.139572 21.0486 0.217184 20.6312C0.95287 16.6925 3.95431 13.5776 7.89166 12.7838C10.8918 12.1786 13.6311 12.8223 16.0631 14.7118C16.1049 14.7444 16.1427 14.7835 16.1988 14.8344C15.4324 15.9738 15.0131 17.2253 14.9785 18.595C14.9439 19.9646 15.2942 21.2207 16.0305 22.4475L0 22.4873V21.886Z" fill="currentColor"></path><path d="M15.8792 18.7587C15.8922 15.3633 18.6185 12.6736 22.0601 12.7101C25.4751 12.746 28.0552 15.5766 27.9991 18.8689C27.9443 22.1364 25.2096 24.8496 21.9121 24.8294C18.5826 24.8085 15.8668 22.0751 15.8792 18.7587ZM20.9664 19.6183C20.5405 19.122 20.1407 18.6498 19.7331 18.1834C19.51 17.9291 19.2491 17.8978 19.0424 18.083C18.8526 18.2532 18.8519 18.535 19.0496 18.7665C19.5387 19.3435 20.0305 19.9172 20.5248 20.4877C20.7492 20.7486 20.9625 20.7668 21.2377 20.5529C21.5129 20.339 21.7901 20.1061 22.0654 19.8818C22.955 19.1578 23.8446 18.4332 24.7342 17.708C25.0107 17.483 25.0635 17.2221 24.8855 17.0036C24.7074 16.7851 24.4446 16.7929 24.1635 17.0153C24.0207 17.1282 23.8811 17.2456 23.7396 17.3604L20.9664 19.6183Z" fill="currentColor"></path><path d="M9.90762 1.48281e-05C10.6669 -0.000243383 11.4188 0.149234 12.1202 0.439891C12.8216 0.730548 13.4588 1.15668 13.9954 1.69389C14.5319 2.23111 14.9573 2.86886 15.2471 3.57065C15.5368 4.27244 15.6854 5.02449 15.6842 5.78376C15.679 8.97956 13.0754 11.5538 9.85675 11.546C6.7053 11.5382 4.12388 8.94173 4.11736 5.77463C4.11475 2.58992 6.71769 -0.00715941 9.90762 1.48281e-05Z" fill="black"></path></svg>
            <h4>Following</h4>
            </div>

            <div className={style.left_sub}>
            <svg width="20" height="20" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.656 9.296C1.95158 9.296 1.27602 9.01617 0.777924 8.51807C0.279828 8.01998 0 7.34441 0 6.64V2.656C0 1.95158 0.279828 1.27602 0.777924 0.777924C1.27602 0.279828 1.95158 0 2.656 0H7.968C8.67241 0 9.34798 0.279828 9.84608 0.777924C10.3442 1.27602 10.624 1.95158 10.624 2.656V6.64C10.624 7.34441 10.3442 8.01998 9.84608 8.51807C9.34798 9.01617 8.67241 9.296 7.968 9.296H2.656ZM2.656 26.56C1.95158 26.56 1.27602 26.2802 0.777924 25.7821C0.279828 25.284 0 24.6084 0 23.904V13.28C0 12.5756 0.279828 11.9 0.777924 11.4019C1.27602 10.9038 1.95158 10.624 2.656 10.624H7.968C8.67241 10.624 9.34798 10.9038 9.84608 11.4019C10.3442 11.9 10.624 12.5756 10.624 13.28V23.904C10.624 24.6084 10.3442 25.284 9.84608 25.7821C9.34798 26.2802 8.67241 26.56 7.968 26.56H2.656ZM15.936 26.56C15.2316 26.56 14.556 26.2802 14.0579 25.7821C13.5598 25.284 13.28 24.6084 13.28 23.904V21.248C13.28 20.5436 13.5598 19.868 14.0579 19.3699C14.556 18.8718 15.2316 18.592 15.936 18.592H21.248C21.9524 18.592 22.628 18.8718 23.1261 19.3699C23.6242 19.868 23.904 20.5436 23.904 21.248V23.904C23.904 24.6084 23.6242 25.284 23.1261 25.7821C22.628 26.2802 21.9524 26.56 21.248 26.56H15.936ZM15.936 15.936C15.2316 15.936 14.556 15.6562 14.0579 15.1581C13.5598 14.66 13.28 13.9844 13.28 13.28V2.656C13.28 1.95158 13.5598 1.27602 14.0579 0.777924C14.556 0.279828 15.2316 0 15.936 0H21.248C21.9524 0 22.628 0.279828 23.1261 0.777924C23.6242 1.27602 23.904 1.95158 23.904 2.656V13.28C23.904 13.9844 23.6242 14.66 23.1261 15.1581C22.628 15.6562 21.9524 15.936 21.248 15.936H15.936Z" fill="currentColor"></path></svg>
            <h4>Dashboard</h4>
            </div>

            <div className={style.left_sub}>
                  <svg width="20" height="20" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 1.49197C18.787 0.801974 17.147 0.291974 15.432 0.0019736C15.4167 -0.000958481 15.4009 0.000931061 15.3868 0.00738094C15.3726 0.0138308 15.3608 0.0245219 15.353 0.0379736C15.143 0.406974 14.909 0.887974 14.745 1.26797C12.9261 0.99621 11.0769 0.99621 9.25799 1.26797C9.07533 0.846834 8.86934 0.436198 8.64099 0.0379736C8.63325 0.0243563 8.62154 0.0134234 8.60743 0.00663373C8.59331 -0.000155898 8.57746 -0.00247938 8.56199 -2.64894e-05C6.84799 0.289973 5.20799 0.799974 3.67699 1.49097C3.66382 1.4965 3.65265 1.50592 3.64499 1.51797C0.532992 6.09297 -0.320008 10.555 0.0989923 14.961C0.100158 14.9718 0.103508 14.9822 0.108837 14.9917C0.114167 15.0011 0.121364 15.0094 0.129992 15.016C1.94638 16.3384 3.97233 17.3458 6.12299 17.996C6.13798 18.0006 6.15402 18.0006 6.16901 17.9959C6.18399 17.9913 6.19723 17.9823 6.20699 17.97C6.66899 17.35 7.08099 16.695 7.43299 16.007C7.45399 15.967 7.43399 15.919 7.39199 15.903C6.746 15.6597 6.12008 15.3661 5.51999 15.025C5.50921 15.0188 5.50012 15.0101 5.49355 14.9995C5.48698 14.989 5.48312 14.977 5.48233 14.9646C5.48153 14.9522 5.48383 14.9398 5.48901 14.9286C5.49418 14.9173 5.50208 14.9075 5.51199 14.9C5.63799 14.807 5.76399 14.71 5.88399 14.613C5.89479 14.6043 5.9078 14.5987 5.92158 14.5969C5.93535 14.5952 5.94934 14.5973 5.96199 14.603C9.88899 16.367 14.142 16.367 18.023 14.603C18.0357 14.5969 18.0498 14.5946 18.0638 14.5961C18.0778 14.5977 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.474 14.9C18.484 14.9073 18.492 14.917 18.4974 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5004 14.9885 18.494 14.9991C18.4876 15.0098 18.4787 15.0186 18.468 15.025C17.87 15.369 17.248 15.66 16.595 15.902C16.585 15.9056 16.5758 15.9114 16.5682 15.9188C16.5606 15.9263 16.5546 15.9353 16.5507 15.9452C16.5468 15.9551 16.5451 15.9658 16.5457 15.9764C16.5463 15.9871 16.5491 15.9975 16.554 16.007C16.914 16.694 17.326 17.348 17.779 17.969C17.7884 17.9817 17.8015 17.9912 17.8166 17.9963C17.8316 18.0013 17.8478 18.0015 17.863 17.997C20.0173 17.3486 22.0466 16.3407 23.865 15.016C23.8739 15.0098 23.8813 15.0017 23.8868 14.9924C23.8923 14.9831 23.8958 14.9727 23.897 14.962C24.397 9.86797 23.059 5.44197 20.348 1.51997C20.3413 1.50723 20.3303 1.49729 20.317 1.49197ZM8.01999 12.278C6.83799 12.278 5.86299 11.209 5.86299 9.89797C5.86299 8.58597 6.81899 7.51797 8.01999 7.51797C9.22999 7.51797 10.196 8.59497 10.177 9.89797C10.177 11.21 9.22099 12.278 8.01999 12.278ZM15.995 12.278C14.812 12.278 13.838 11.209 13.838 9.89797C13.838 8.58597 14.793 7.51797 15.995 7.51797C17.205 7.51797 18.171 8.59497 18.152 9.89797C18.152 11.21 17.206 12.278 15.995 12.278Z" fill="black"></path></svg>
                  <h4>Discord</h4>
            </div>

            <div className={style.left_sub}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" fill="black"><path d="M25,2C12.297,2,2,12.297,2,25c0,12.703,10.297,23,23,23s23-10.297,23-23C48,12.297,37.703,2,25,2z M25.34,32.413 c2.527,0,4.451-1.295,5.03-3.395h2.301C32.067,32.35,29.2,34.5,25.34,34.5c-4.929,0-8.01-3.647-8.01-9.494 c0-5.86,3.068-9.506,7.997-9.506c3.823,0,6.803,2.402,7.343,5.897h-2.301c-0.604-2.339-2.54-3.81-5.042-3.81 c-3.483,0-5.671,2.867-5.671,7.419S21.844,32.413,25.34,32.413z"></path></svg>
            <h4>Creator Access</h4>
            </div>

            <div className={style.left_sub}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M 2 1 C 0.8974609 1 0 1.8969727 0 3 L 0 22.5 C 0 22.702148 0.12207025 22.885742 0.30859375 22.962891 C 0.37011715 22.98877 0.4355469 23 0.5 23 C 0.6298828 23 0.75781253 22.949219 0.85351562 22.853516 L 5.7070312 18 L 20 18 C 21.102539 18 22 17.103027 22 16 L 22 10.328125 C 22 10.125977 21.87793 9.9423829 21.691406 9.8652344 C 21.504883 9.7875977 21.289062 9.831543 21.146484 9.9746094 L 18.058594 13.060547 C 17.848633 13.270996 17.583008 13.412598 17.292969 13.470703 L 14.792969 13.970703 C 14.294922 14.071289 13.791992 13.912598 13.439453 13.560547 C 13.083984 13.20459 12.930664 12.697266 13.029297 12.205078 L 13.470703 10 L 5.5 10 C 5.2236328 10 5 9.7763672 5 9.5 C 5 9.2236328 5.2236328 9 5.5 9 L 13.892578 9 C 13.909973 8.9807129 13.921021 8.9559936 13.939453 8.9375 L 15.876953 7 L 5.5 7 C 5.2236328 7 5 6.7763672 5 6.5 C 5 6.2236328 5.2236328 6 5.5 6 L 16.5 6 C 16.606445 6 16.700195 6.0410157 16.78125 6.0976562 L 20.025391 2.8535156 C 20.298828 2.5795898 20.629883 2.3642578 21.009766 2.2128906 C 21.182617 2.1440429 21.301758 1.9838867 21.320312 1.7988281 C 21.339844 1.6132812 21.254883 1.4326171 21.099609 1.3300781 C 20.770508 1.1137695 20.390625 1 20 1 L 2 1 z M 22.085938 3 C 21.581055 3 21.087891 3.2045898 20.732422 3.5605469 L 14.646484 9.6445312 C 14.576172 9.7143554 14.529297 9.8037109 14.509766 9.9003906 L 14.009766 12.402344 C 13.976563 12.566406 14.02832 12.735352 14.146484 12.853516 C 14.241211 12.948242 14.369141 13 14.5 13 C 14.532227 13 14.56543 12.996582 14.597656 12.990234 L 17.097656 12.490234 C 17.195313 12.470703 17.28418 12.42334 17.353516 12.353516 L 23.439453 6.2675781 C 23.795898 5.9111328 24 5.4174805 24 4.9140625 C 24 3.8583984 23.141602 3 22.085938 3 z M 20.707031 5 L 22 6.2929688 L 21.292969 7 L 20 5.7070312 L 20.707031 5 z M 5.5 12 L 11.5 12 C 11.776367 12 12 12.223633 12 12.5 C 12 12.776367 11.776367 13 11.5 13 L 5.5 13 C 5.2236328 13 5 12.776367 5 12.5 C 5 12.223633 5.2236328 12 5.5 12 z"></path></svg>
              <h4>Feedback</h4>
            </div>

            <div className={style.left_sub}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.93 250.93" width="20" height="20" fill="black"><path d="m247.896,25.718l-25.083-17.244c-1.167-0.802-2.55-1.232-3.966-1.232h-91.706c-3.866,0-7,3.134-7,7v47.462h-88.06c-1.416,0-2.799,0.43-3.966,1.231l-25.081,17.244c-1.899,1.306-3.034,3.464-3.034,5.769s1.135,4.462 3.034,5.768l25.082,17.244c1.167,0.802 2.55,1.232 3.966,1.232h88.06v119.496h-29.224c-3.866,0-7,3.134-7,7s3.134,7 7,7h69.74c3.866,0 7-3.134 7-7s-3.134-7-7-7h-26.517v-173.959h84.706c1.416,1.42109e-14 2.799-0.43 3.966-1.232l25.082-17.243c1.899-1.306 3.034-3.463 3.034-5.769s-1.134-4.462-3.033-5.767zm-213.64,70.474l-14.9-10.244 14.9-10.244h85.885v20.488h-85.885zm182.417-54.463h-82.532v-20.487h82.532l14.9,10.244-14.9,10.243z"></path></svg>
            <h4>Tour</h4>
            </div>

      </div>
      <div className={style.right}>
          <Profile/>
          <Details/>
      </div>
    </div>
  )
}

export default Home                                           
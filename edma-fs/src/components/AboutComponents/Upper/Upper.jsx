import React, { useContext } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Context } from '../../../Context/Language';
import { data } from '../../../assets/data/dummydata';
import './upper.scss';

const Upper = () => {
    const [{lang}, dispatch] = useContext(Context);

  return (
    <div className='upper'>
        <div className='container'>
            <SectionTitle 
                title={data[lang].aboutPage.upper.name}
                beforeLine={true}
                afterLine={true}
            />
            <div className='center-content'>
                <p>{data[lang].aboutPage.upper.desc}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 908 275" version="1.1">
                        <path d="M 240.084 9.894 C 238.388 12.036, 237 14.121, 237 14.529 C 237 14.936, 238.003 13.972, 239.229 12.385 C 240.454 10.798, 242.029 8.905, 242.729 8.179 C 243.428 7.452, 244 6.664, 244 6.429 C 244 5.350, 242.939 6.289, 240.084 9.894 M 475.307 8.250 C 472.161 11.716, 469.659 15.993, 470.365 16.698 C 470.714 17.047, 471 16.843, 471 16.243 C 471 15.644, 472.572 13.094, 474.493 10.577 C 478.246 5.661, 478.615 4.605, 475.307 8.250 M 50.463 31.241 C 50.199 31.933, 50.099 64.675, 50.241 104 L 50.500 175.500 103.250 175.759 L 156 176.018 155.796 167.259 L 155.593 158.500 155.256 166.750 L 154.919 175 102.960 175 L 51 175 51 103 L 51 31 102.973 31 L 154.947 31 155.265 45.501 L 155.583 60.002 155.542 45.251 L 155.500 30.500 103.222 30.241 C 61.932 30.037, 50.843 30.247, 50.463 31.241 M 269.460 31.250 C 269.197 31.938, 269.099 64.675, 269.241 104 L 269.500 175.500 274.256 175.592 L 279.013 175.684 274.506 175.287 L 270 174.890 270 102.959 L 270 31.027 303.250 30.750 L 336.500 30.472 303.219 30.236 C 277.339 30.052, 269.831 30.278, 269.460 31.250 M 492.460 31.250 C 492.197 31.938, 492.099 64.675, 492.241 104 L 492.500 175.500 511.250 175.772 C 521.563 175.922, 530.001 175.697, 530.001 175.272 C 530.002 174.847, 521.677 174.632, 511.501 174.793 L 493 175.085 493 103.008 L 493 30.931 516.906 31.215 C 530.054 31.372, 540.602 31.163, 540.347 30.750 C 540.091 30.338, 529.319 30, 516.410 30 C 498.553 30, 492.823 30.299, 492.460 31.250 M 609.768 30.725 C 611.565 30.947, 614.265 30.943, 615.768 30.715 C 617.271 30.486, 615.800 30.304, 612.500 30.310 C 609.200 30.315, 607.971 30.502, 609.768 30.725 M 635.250 30.735 C 637.862 30.941, 642.138 30.941, 644.750 30.735 C 647.362 30.529, 645.225 30.360, 640 30.360 C 634.775 30.360, 632.638 30.529, 635.250 30.735 M 812.250 30.716 C 813.763 30.945, 816.237 30.945, 817.750 30.716 C 819.263 30.487, 818.025 30.300, 815 30.300 C 811.975 30.300, 810.737 30.487, 812.250 30.716 M 649.473 104 C 649.473 142.225, 649.598 157.862, 649.750 138.750 C 649.902 119.637, 649.902 88.362, 649.750 69.250 C 649.598 50.137, 649.473 65.775, 649.473 104 M 87.427 65.329 C 87.147 66.060, 87.052 70.673, 87.217 75.579 L 87.517 84.500 88.008 74.248 C 88.496 64.079, 88.411 62.767, 87.427 65.329 M 306.442 99 C 306.442 115.225, 306.580 121.862, 306.748 113.750 C 306.916 105.637, 306.916 92.362, 306.748 84.250 C 306.580 76.137, 306.442 82.775, 306.442 99 M 609.969 98.058 C 609.347 99.220, 609.058 100.392, 609.328 100.661 C 609.597 100.930, 610.196 100.104, 610.659 98.825 C 611.157 97.448, 611.712 110.970, 612.019 132 L 612.539 167.500 612.769 132.309 C 612.910 110.901, 612.628 96.888, 612.050 96.531 C 611.528 96.208, 610.591 96.895, 609.969 98.058 M 404.320 103 C 404.320 106.575, 404.502 108.037, 404.723 106.250 C 404.945 104.463, 404.945 101.537, 404.723 99.750 C 404.502 97.963, 404.320 99.425, 404.320 103 M 529.454 135.500 C 529.453 156.400, 529.586 165.092, 529.748 154.816 C 529.911 144.540, 529.911 127.440, 529.749 116.816 C 529.587 106.192, 529.454 114.600, 529.454 135.500 M 93.784 118.738 C 96.689 118.941, 101.189 118.939, 103.784 118.734 C 106.378 118.528, 104 118.363, 98.500 118.365 C 93 118.368, 90.878 118.536, 93.784 118.738 M 87.370 130 C 87.370 135.775, 87.535 138.137, 87.737 135.250 C 87.939 132.363, 87.939 127.638, 87.737 124.750 C 87.535 121.862, 87.370 124.225, 87.370 130 M 792.250 152.747 C 799.263 152.919, 810.737 152.919, 817.750 152.747 C 824.763 152.575, 819.025 152.435, 805 152.435 C 790.975 152.435, 785.237 152.575, 792.250 152.747 M 701.320 168 C 701.320 171.575, 701.502 173.037, 701.723 171.250 C 701.945 169.463, 701.945 166.537, 701.723 164.750 C 701.502 162.963, 701.320 164.425, 701.320 168 M 559.082 169.101 C 559.037 169.431, 559.494 171.119, 560.098 172.851 L 561.196 176 570.539 176 C 575.678 176, 580.092 175.662, 580.349 175.250 C 580.605 174.838, 576.596 174.643, 571.438 174.818 L 562.061 175.136 560.612 171.818 C 559.815 169.993, 559.126 168.770, 559.082 169.101 M 839.256 174 C 839.600 175.259, 842.931 175.544, 860.011 175.771 C 871.202 175.920, 880.705 175.695, 881.131 175.271 C 881.556 174.847, 872.626 174.631, 861.286 174.790 C 845.320 175.015, 840.463 174.790, 839.758 173.790 C 839.059 172.800, 838.943 172.849, 839.256 174 M 636 175 L 622.500 175.589 635.691 175.794 C 643.636 175.918, 649.128 175.602, 649.500 175 C 649.840 174.450, 649.979 174.092, 649.809 174.206 C 649.639 174.319, 643.425 174.676, 636 175 M 750.500 175 L 731.500 175.567 750.750 175.783 C 763.061 175.922, 770 175.640, 770 175 C 770 174.450, 769.888 174.097, 769.750 174.217 C 769.612 174.336, 760.950 174.688, 750.500 175 M 327.776 175.733 C 330.128 175.945, 333.728 175.942, 335.776 175.727 C 337.824 175.512, 335.900 175.339, 331.500 175.343 C 327.100 175.346, 325.424 175.522, 327.776 175.733 M 715.463 225.591 C 705.463 229.142, 699.706 237.695, 699.706 249 C 699.706 259.888, 705.302 268.635, 714.927 272.794 C 720.532 275.215, 731.493 274.916, 737.488 272.180 C 746.422 268.100, 747 267.105, 747 255.794 L 747 245.937 735.250 246.218 L 723.500 246.500 723.500 251 L 723.500 255.500 729.750 255.798 C 735.925 256.092, 736 256.130, 736 259.022 C 736 264.492, 726.300 266.906, 719.020 263.248 C 709.023 258.226, 708.074 242.364, 717.373 235.730 C 722.095 232.362, 729.516 232.631, 734.388 236.347 C 737.750 238.911, 738.408 239.074, 741.027 237.989 C 745.942 235.953, 746.645 234.323, 743.897 231.338 C 737.851 224.772, 725.054 222.186, 715.463 225.591 M 819 224.952 C 817.736 225.772, 817.500 229.667, 817.500 249.712 L 817.500 273.500 822.250 273.805 C 826.108 274.052, 827 273.802, 827 272.471 C 827 271.570, 827.337 271.007, 827.750 271.219 C 836.429 275.687, 841.525 275.899, 846.976 272.017 C 852.131 268.346, 854.263 262.869, 853.834 254.392 C 853.440 246.587, 851.965 243.556, 846.615 239.562 C 842.913 236.798, 832.931 236.635, 830.286 239.296 C 828.570 241.021, 828.461 240.765, 827.500 232.796 C 826.507 224.555, 826.480 224.498, 823.500 224.239 C 821.850 224.096, 819.825 224.417, 819 224.952 M 861.667 224.667 C 861.300 225.033, 861 236.283, 861 249.667 L 861 274 866.465 274 L 871.930 274 872.215 263.750 L 872.500 253.500 883.500 253.500 L 894.500 253.500 894.500 263.751 L 894.500 274.003 900.267 274.001 L 906.035 274 905.767 249.250 L 905.500 224.500 900.500 224.500 L 895.500 224.500 895.212 233.750 C 894.986 241.046, 894.616 243.009, 893.462 243.042 C 892.658 243.065, 887.612 243.103, 882.250 243.127 L 872.500 243.171 872.208 234.369 C 872.026 228.873, 871.462 225.278, 870.708 224.798 C 869.218 223.852, 862.578 223.755, 861.667 224.667 M 768.825 238.954 C 765.674 240.642, 765.100 240.703, 764.600 239.399 C 764.173 238.286, 762.799 237.970, 759.374 238.195 L 754.727 238.500 754.655 248 C 754.615 253.225, 754.677 261.237, 754.791 265.805 L 755 274.110 759.750 273.805 L 764.500 273.500 764.595 261.750 C 764.700 248.667, 765.799 246, 771.084 246 C 776.293 246, 777 247.868, 777 261.626 L 777 274.110 781.750 273.805 L 786.500 273.500 786.760 261.500 C 786.994 250.707, 787.231 249.324, 789.121 247.750 C 791.729 245.577, 795.356 245.499, 797.429 247.571 C 798.689 248.831, 799 251.606, 799 261.571 L 799 274 804 274 L 809 274 809 260.149 C 809 252.531, 808.501 244.868, 807.892 243.119 C 805.677 236.767, 796.258 234.979, 789.427 239.614 C 787.027 241.243, 785.433 241.800, 785.198 241.093 C 784.589 239.267, 779.376 237, 775.785 237 C 773.962 237, 770.830 237.879, 768.825 238.954 M 829.981 247.814 C 828.161 249.288, 827.697 250.782, 827.508 255.784 C 827.241 262.840, 828.519 264.723, 834.201 265.645 C 836.943 266.090, 838.250 265.689, 840.575 263.689 C 843.107 261.511, 843.500 260.478, 843.500 256 C 843.500 251.572, 843.096 250.479, 840.694 248.413 C 837.361 245.546, 833.078 245.306, 829.981 247.814" stroke="none" fill="#8b8b8b" fillRule="evenodd"/><path d="M 19.581 1.812 C 11.991 4.349, 4.941 11.383, 2.197 19.154 L -0.047 25.511 0.226 105.006 L 0.500 184.500 3.330 190.265 C 5.200 194.076, 7.716 197.219, 10.753 199.537 C 19.560 206.262, 16.921 206.088, 105.605 205.779 L 185.500 205.500 190.239 203.166 C 196.499 200.083, 202.626 193, 204.505 186.672 C 206.793 178.965, 206.740 25.527, 204.446 18.795 C 202.270 12.410, 196.943 6.610, 190.224 3.311 L 184.500 0.500 104.500 0.334 C 32.645 0.184, 23.999 0.335, 19.581 1.812 M 252.551 2.316 C 245.618 4.861, 239.671 10.329, 236.585 16.996 C 234.526 21.445, 234.500 22.498, 234.500 103.070 L 234.500 184.641 237.510 190.527 C 239.378 194.180, 242.147 197.654, 244.805 199.681 C 253.263 206.133, 251.343 206, 336.132 206 C 389.503 206, 414.510 205.655, 418.180 204.868 C 424.603 203.491, 429.698 200.396, 433.904 195.320 C 440.187 187.736, 440.075 189.539, 439.773 101.414 L 439.500 21.500 436.686 15.770 C 433.239 8.750, 428.483 4.685, 420.609 2.025 C 414.783 0.058, 412.387 0.002, 336.556 0.066 C 258.875 0.132, 258.471 0.143, 252.551 2.316 M 486.963 2.091 C 479.781 4.599, 475.144 8.505, 471.466 15.144 L 468.500 20.500 468.221 100.895 C 467.906 191.922, 467.611 188.014, 475.450 196.733 C 483.829 206.052, 477.776 205.500, 571.500 205.500 L 653.500 205.500 657.616 203.298 C 664.251 199.748, 667.714 196.283, 670.699 190.204 L 673.500 184.500 673.500 103 C 673.500 21.686, 673.495 21.489, 671.348 16.844 C 668.181 9.993, 662.059 4.541, 654.766 2.078 C 648.734 0.041, 647.060 0.002, 570.556 0.079 C 496.084 0.154, 492.246 0.247, 486.963 2.091 M 721.332 1.851 C 712.043 5.061, 705.977 11.103, 703.380 19.731 C 701.248 26.817, 701.353 179.459, 703.495 186.672 C 705.369 192.980, 711.208 199.733, 717.623 203.009 L 722.500 205.500 804.570 205.500 L 886.641 205.500 892.472 202.500 C 899.444 198.913, 903.301 194.421, 906 186.742 C 907.934 181.237, 908 178.492, 908 103.062 C 908 25.999, 907.975 25.006, 905.873 19.288 C 904.382 15.234, 902.211 12.001, 898.623 8.497 C 889.513 -0.400, 893.907 -0.005, 804.412 0.033 C 732.262 0.063, 726.118 0.197, 721.332 1.851 M 50.463 31.241 C 50.199 31.933, 50.099 64.675, 50.241 104 L 50.500 175.500 103.250 175.759 L 156 176.018 156 159.009 L 156 142 122 142 L 88 142 88 130.500 L 88 119 121 119 L 154 119 154 102 L 154 85 120.965 85 L 87.930 85 88.215 74.750 L 88.500 64.500 122.274 64.237 L 156.048 63.973 155.774 47.237 L 155.500 30.500 103.222 30.241 C 61.932 30.037, 50.843 30.247, 50.463 31.241 M 269.460 31.250 C 269.197 31.938, 269.099 64.675, 269.241 104 L 269.500 175.500 307 175.452 L 344.500 175.404 353.473 172.642 C 379.547 164.615, 396.037 147.457, 403.103 121 C 404.904 114.256, 404.651 91.853, 402.683 83.784 C 397.126 61.005, 380.235 42.828, 357.275 34.921 C 345.684 30.928, 335.288 30.008, 301.719 30.004 C 277.212 30.001, 269.828 30.286, 269.460 31.250 M 492.467 31.232 C 492.200 31.929, 492.099 64.675, 492.241 104 L 492.500 175.500 511.239 175.772 L 529.977 176.044 530.239 136.272 L 530.500 96.500 532.670 102 C 543.785 130.178, 558.939 169.239, 559.938 172.285 L 561.178 176.070 570.752 175.785 L 580.326 175.500 595.565 136.681 C 603.947 115.331, 611.073 97.593, 611.402 97.265 C 611.731 96.936, 612 114.527, 612 136.355 L 612 176.044 630.750 175.772 L 649.500 175.500 649.732 105 C 649.860 66.225, 649.693 33.479, 649.361 32.232 L 648.757 29.964 625.237 30.232 C 605.562 30.456, 601.580 30.745, 600.880 32 C 600.420 32.825, 593.692 49.925, 585.929 70 C 578.166 90.075, 571.631 106.688, 571.407 106.917 C 571.183 107.146, 570.740 107.074, 570.423 106.756 C 570.105 106.439, 563.237 89.151, 555.161 68.339 L 540.476 30.500 516.714 30.232 C 498.246 30.023, 492.843 30.246, 492.467 31.232 M 783.174 31.730 C 782.670 32.704, 777.664 45.425, 772.051 60 C 758.068 96.305, 754.283 106.111, 750.438 116 C 737.173 150.117, 728 174.262, 728 175.059 C 728 175.617, 736.471 176, 748.799 176 L 769.598 176 770.941 172.250 C 771.679 170.188, 773.609 165.012, 775.229 160.750 L 778.175 153 804.838 153.005 L 831.500 153.009 835.622 164.255 L 839.744 175.500 859.594 175.772 C 870.511 175.921, 879.977 175.839, 880.630 175.589 C 881.432 175.281, 879.712 169.686, 875.321 158.317 C 871.748 149.068, 866.674 135.875, 864.045 129 C 861.416 122.125, 852.827 99.850, 844.958 79.500 C 837.089 59.150, 829.654 39.800, 828.437 36.500 L 826.223 30.500 805.157 30.230 C 785.857 29.983, 784.015 30.109, 783.174 31.730 M 307 103 L 307 142 320.250 141.988 C 339.077 141.971, 347.086 139.463, 355.908 130.819 C 370.609 116.417, 370.142 87.299, 354.992 73.612 C 347.135 66.513, 337.599 64.021, 318.250 64.008 L 307 64 307 103 M 797.151 96.722 C 793.194 107.600, 789.967 117.063, 789.979 117.750 C 789.995 118.691, 793.545 119, 804.333 119 C 812.217 119, 818.932 118.734, 819.257 118.409 C 819.582 118.084, 818.296 113.472, 816.400 108.159 C 809.557 88.993, 805.617 78.485, 804.987 77.722 C 804.633 77.294, 801.107 85.844, 797.151 96.722" stroke="none" fill="#da1e33" fillRule="evenodd"/>
                    </svg>
            </div>
        </div>
    </div>
  )
}

export default Upper
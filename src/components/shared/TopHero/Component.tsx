import { FC } from 'react'
import { ContainerProps } from './Container'

type Props = {} & ContainerProps

const Logo = () => {
  return (
    <svg
      viewBox="0 0 1052 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full h-full"
    >
      <g filter="url(#filter0_b)">
        <mask
          id="path-1-outside-1"
          maskUnits="userSpaceOnUse"
          x="0.22644"
          y="0"
          width="1052"
          height="91"
          fill="black"
        >
          <rect fill="white" x="0.22644" width="1052" height="91" />
          <path d="M74.0665 88H54.9864L14.4264 20.8H13.9464C14.1864 24.4 14.3864 28.28 14.5464 32.44C14.7864 36.52 14.9464 40.64 15.0264 44.8V88H1.22644V2.32H20.1864L60.6264 69.04H60.9864C60.8264 65.84 60.6664 62.16 60.5064 58C60.3464 53.84 60.2264 49.8 60.1465 45.88V2.32H74.0665V88Z" />
          <path d="M161.303 88L153.503 65.32H121.223L113.543 88H97.2227L128.663 1.96H146.183L177.623 88H161.303ZM142.103 30.04C141.783 28.92 141.303 27.4 140.663 25.48C140.023 23.56 139.383 21.6 138.743 19.6C138.183 17.52 137.743 15.8 137.423 14.44C137.023 16.04 136.503 17.88 135.863 19.96C135.303 22.04 134.743 24 134.183 25.84C133.623 27.68 133.223 29.08 132.983 30.04L125.423 52.12H149.543L142.103 30.04Z" />
          <path d="M273.73 88H254.651L214.09 20.8H213.611C213.851 24.4 214.05 28.28 214.21 32.44C214.451 36.52 214.611 40.64 214.691 44.8V88H200.891V2.32H219.85L260.29 69.04H260.651C260.491 65.84 260.331 62.16 260.171 58C260.01 53.84 259.891 49.8 259.811 45.88V2.32H273.73V88Z" />
          <path d="M360.967 88L353.167 65.32H320.887L313.207 88H296.887L328.327 1.96H345.847L377.287 88H360.967ZM341.767 30.04C341.447 28.92 340.967 27.4 340.327 25.48C339.687 23.56 339.047 21.6 338.407 19.6C337.847 17.52 337.407 15.8 337.087 14.44C336.687 16.04 336.167 17.88 335.527 19.96C334.967 22.04 334.407 24 333.847 25.84C333.287 27.68 332.887 29.08 332.647 30.04L325.087 52.12H349.207L341.767 30.04Z" />
          <path d="M467.035 88H449.395L423.955 50.08L415.915 56.44V88H400.555V2.32H415.915V42.64C417.515 40.64 419.155 38.6 420.835 36.52C422.515 34.44 424.195 32.36 425.875 30.28L449.035 2.32H466.435L434.995 40L467.035 88Z" />
          <path d="M519.29 88H483.29V79.24L493.61 75.4V15.04L483.29 11.08V2.32H519.29V11.08L508.97 15.04V75.4L519.29 79.24V88Z" />
          <path d="M692.436 2.32L670.236 88H653.316L639.756 38.8C639.276 37.2 638.756 35.16 638.196 32.68C637.636 30.12 637.116 27.64 636.636 25.24C636.156 22.84 635.836 21.08 635.676 19.96C635.516 21.08 635.196 22.84 634.716 25.24C634.316 27.56 633.796 30 633.156 32.56C632.596 35.12 632.076 37.28 631.596 39.04L618.396 88H601.356L579.276 2.32H594.636L606.396 51.16C606.956 53.24 607.476 55.6 607.956 58.24C608.516 60.88 609.036 63.52 609.516 66.16C609.996 68.72 610.356 70.96 610.596 72.88C610.836 70.88 611.196 68.56 611.676 65.92C612.156 63.28 612.676 60.72 613.236 58.24C613.796 55.68 614.316 53.52 614.796 51.76L628.236 2.32H643.116L656.796 51.88C657.356 53.64 657.916 55.84 658.476 58.48C659.036 61.04 659.556 63.6 660.036 66.16C660.516 68.72 660.876 70.96 661.116 72.88C661.356 70.88 661.676 68.6 662.076 66.04C662.556 63.48 663.076 60.88 663.636 58.24C664.196 55.6 664.756 53.24 665.316 51.16L677.076 2.32H692.436Z" />
          <path d="M791.599 45.04C791.599 53.92 790.119 61.68 787.159 68.32C784.279 74.88 779.839 80 773.839 83.68C767.839 87.36 760.319 89.2 751.279 89.2C742.159 89.2 734.599 87.36 728.599 83.68C722.679 80 718.239 74.84 715.279 68.2C712.399 61.56 710.959 53.8 710.959 44.92C710.959 36.12 712.399 28.44 715.279 21.88C718.239 15.24 722.679 10.12 728.599 6.52C734.599 2.84 742.199 1 751.399 1C760.439 1 767.919 2.84 773.839 6.52C779.839 10.12 784.279 15.24 787.159 21.88C790.119 28.44 791.599 36.16 791.599 45.04ZM727.159 45.04C727.159 54.72 729.079 62.32 732.919 67.84C736.759 73.36 742.879 76.12 751.279 76.12C759.759 76.12 765.879 73.36 769.639 67.84C773.479 62.32 775.399 54.72 775.399 45.04C775.399 35.36 773.519 27.76 769.759 22.24C765.999 16.72 759.879 13.96 751.399 13.96C742.999 13.96 736.839 16.72 732.919 22.24C729.079 27.76 727.159 35.36 727.159 45.04Z" />
          <path d="M846.204 2.32C857.484 2.32 865.804 4.4 871.164 8.56C876.604 12.72 879.324 19.04 879.324 27.52C879.324 31.68 878.524 35.24 876.924 38.2C875.404 41.16 873.404 43.64 870.924 45.64C868.444 47.56 865.764 49.12 862.884 50.32L887.484 88H870.204L849.684 54.16H837.204V88H821.844V2.32H846.204ZM845.244 15.16H837.204V41.56H845.724C852.044 41.56 856.604 40.44 859.404 38.2C862.284 35.88 863.724 32.48 863.724 28C863.724 23.36 862.204 20.08 859.164 18.16C856.204 16.16 851.564 15.16 845.244 15.16Z" />
          <path d="M977.902 88H960.262L934.822 50.08L926.782 56.44V88H911.422V2.32H926.782V42.64C928.382 40.64 930.022 38.6 931.702 36.52C933.382 34.44 935.062 32.36 936.742 30.28L959.902 2.32H977.302L945.862 40L977.902 88Z" />
          <path d="M1050.92 64.6C1050.92 72.2 1048.16 78.2 1042.64 82.6C1037.12 87 1029.48 89.2 1019.72 89.2C1010.28 89.2 1002.28 87.6 995.717 84.4V70C999.317 71.6 1003.28 73.08 1007.6 74.44C1011.92 75.72 1016.32 76.36 1020.8 76.36C1025.92 76.36 1029.68 75.36 1032.08 73.36C1034.48 71.36 1035.68 68.72 1035.68 65.44C1035.68 61.84 1034.16 59 1031.12 56.92C1028.08 54.84 1023.64 52.56 1017.8 50.08C1014.28 48.56 1010.92 46.76 1007.72 44.68C1004.52 42.6 1001.88 39.96 999.797 36.76C997.717 33.56 996.677 29.48 996.677 24.52C996.677 17.16 999.237 11.44 1004.36 7.36C1009.56 3.2 1016.48 1.12 1025.12 1.12C1029.68 1.12 1033.92 1.6 1037.84 2.56C1041.84 3.52 1045.84 4.88 1049.84 6.64L1044.92 19C1041.32 17.48 1037.88 16.28 1034.6 15.4C1031.4 14.52 1028.08 14.08 1024.64 14.08C1020.48 14.08 1017.32 15.04 1015.16 16.96C1013 18.8 1011.92 21.2 1011.92 24.16C1011.92 26.56 1012.52 28.56 1013.72 30.16C1014.92 31.76 1016.76 33.24 1019.24 34.6C1021.8 35.96 1025.08 37.52 1029.08 39.28C1033.64 41.28 1037.56 43.36 1040.84 45.52C1044.12 47.68 1046.6 50.28 1048.28 53.32C1050.04 56.36 1050.92 60.12 1050.92 64.6Z" />
        </mask>
        <path
          d="M74.0665 88H54.9864L14.4264 20.8H13.9464C14.1864 24.4 14.3864 28.28 14.5464 32.44C14.7864 36.52 14.9464 40.64 15.0264 44.8V88H1.22644V2.32H20.1864L60.6264 69.04H60.9864C60.8264 65.84 60.6664 62.16 60.5064 58C60.3464 53.84 60.2264 49.8 60.1465 45.88V2.32H74.0665V88Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M161.303 88L153.503 65.32H121.223L113.543 88H97.2227L128.663 1.96H146.183L177.623 88H161.303ZM142.103 30.04C141.783 28.92 141.303 27.4 140.663 25.48C140.023 23.56 139.383 21.6 138.743 19.6C138.183 17.52 137.743 15.8 137.423 14.44C137.023 16.04 136.503 17.88 135.863 19.96C135.303 22.04 134.743 24 134.183 25.84C133.623 27.68 133.223 29.08 132.983 30.04L125.423 52.12H149.543L142.103 30.04Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M273.73 88H254.651L214.09 20.8H213.611C213.851 24.4 214.05 28.28 214.21 32.44C214.451 36.52 214.611 40.64 214.691 44.8V88H200.891V2.32H219.85L260.29 69.04H260.651C260.491 65.84 260.331 62.16 260.171 58C260.01 53.84 259.891 49.8 259.811 45.88V2.32H273.73V88Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M360.967 88L353.167 65.32H320.887L313.207 88H296.887L328.327 1.96H345.847L377.287 88H360.967ZM341.767 30.04C341.447 28.92 340.967 27.4 340.327 25.48C339.687 23.56 339.047 21.6 338.407 19.6C337.847 17.52 337.407 15.8 337.087 14.44C336.687 16.04 336.167 17.88 335.527 19.96C334.967 22.04 334.407 24 333.847 25.84C333.287 27.68 332.887 29.08 332.647 30.04L325.087 52.12H349.207L341.767 30.04Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M467.035 88H449.395L423.955 50.08L415.915 56.44V88H400.555V2.32H415.915V42.64C417.515 40.64 419.155 38.6 420.835 36.52C422.515 34.44 424.195 32.36 425.875 30.28L449.035 2.32H466.435L434.995 40L467.035 88Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M519.29 88H483.29V79.24L493.61 75.4V15.04L483.29 11.08V2.32H519.29V11.08L508.97 15.04V75.4L519.29 79.24V88Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M692.436 2.32L670.236 88H653.316L639.756 38.8C639.276 37.2 638.756 35.16 638.196 32.68C637.636 30.12 637.116 27.64 636.636 25.24C636.156 22.84 635.836 21.08 635.676 19.96C635.516 21.08 635.196 22.84 634.716 25.24C634.316 27.56 633.796 30 633.156 32.56C632.596 35.12 632.076 37.28 631.596 39.04L618.396 88H601.356L579.276 2.32H594.636L606.396 51.16C606.956 53.24 607.476 55.6 607.956 58.24C608.516 60.88 609.036 63.52 609.516 66.16C609.996 68.72 610.356 70.96 610.596 72.88C610.836 70.88 611.196 68.56 611.676 65.92C612.156 63.28 612.676 60.72 613.236 58.24C613.796 55.68 614.316 53.52 614.796 51.76L628.236 2.32H643.116L656.796 51.88C657.356 53.64 657.916 55.84 658.476 58.48C659.036 61.04 659.556 63.6 660.036 66.16C660.516 68.72 660.876 70.96 661.116 72.88C661.356 70.88 661.676 68.6 662.076 66.04C662.556 63.48 663.076 60.88 663.636 58.24C664.196 55.6 664.756 53.24 665.316 51.16L677.076 2.32H692.436Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M791.599 45.04C791.599 53.92 790.119 61.68 787.159 68.32C784.279 74.88 779.839 80 773.839 83.68C767.839 87.36 760.319 89.2 751.279 89.2C742.159 89.2 734.599 87.36 728.599 83.68C722.679 80 718.239 74.84 715.279 68.2C712.399 61.56 710.959 53.8 710.959 44.92C710.959 36.12 712.399 28.44 715.279 21.88C718.239 15.24 722.679 10.12 728.599 6.52C734.599 2.84 742.199 1 751.399 1C760.439 1 767.919 2.84 773.839 6.52C779.839 10.12 784.279 15.24 787.159 21.88C790.119 28.44 791.599 36.16 791.599 45.04ZM727.159 45.04C727.159 54.72 729.079 62.32 732.919 67.84C736.759 73.36 742.879 76.12 751.279 76.12C759.759 76.12 765.879 73.36 769.639 67.84C773.479 62.32 775.399 54.72 775.399 45.04C775.399 35.36 773.519 27.76 769.759 22.24C765.999 16.72 759.879 13.96 751.399 13.96C742.999 13.96 736.839 16.72 732.919 22.24C729.079 27.76 727.159 35.36 727.159 45.04Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M846.204 2.32C857.484 2.32 865.804 4.4 871.164 8.56C876.604 12.72 879.324 19.04 879.324 27.52C879.324 31.68 878.524 35.24 876.924 38.2C875.404 41.16 873.404 43.64 870.924 45.64C868.444 47.56 865.764 49.12 862.884 50.32L887.484 88H870.204L849.684 54.16H837.204V88H821.844V2.32H846.204ZM845.244 15.16H837.204V41.56H845.724C852.044 41.56 856.604 40.44 859.404 38.2C862.284 35.88 863.724 32.48 863.724 28C863.724 23.36 862.204 20.08 859.164 18.16C856.204 16.16 851.564 15.16 845.244 15.16Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M977.902 88H960.262L934.822 50.08L926.782 56.44V88H911.422V2.32H926.782V42.64C928.382 40.64 930.022 38.6 931.702 36.52C933.382 34.44 935.062 32.36 936.742 30.28L959.902 2.32H977.302L945.862 40L977.902 88Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M1050.92 64.6C1050.92 72.2 1048.16 78.2 1042.64 82.6C1037.12 87 1029.48 89.2 1019.72 89.2C1010.28 89.2 1002.28 87.6 995.717 84.4V70C999.317 71.6 1003.28 73.08 1007.6 74.44C1011.92 75.72 1016.32 76.36 1020.8 76.36C1025.92 76.36 1029.68 75.36 1032.08 73.36C1034.48 71.36 1035.68 68.72 1035.68 65.44C1035.68 61.84 1034.16 59 1031.12 56.92C1028.08 54.84 1023.64 52.56 1017.8 50.08C1014.28 48.56 1010.92 46.76 1007.72 44.68C1004.52 42.6 1001.88 39.96 999.797 36.76C997.717 33.56 996.677 29.48 996.677 24.52C996.677 17.16 999.237 11.44 1004.36 7.36C1009.56 3.2 1016.48 1.12 1025.12 1.12C1029.68 1.12 1033.92 1.6 1037.84 2.56C1041.84 3.52 1045.84 4.88 1049.84 6.64L1044.92 19C1041.32 17.48 1037.88 16.28 1034.6 15.4C1031.4 14.52 1028.08 14.08 1024.64 14.08C1020.48 14.08 1017.32 15.04 1015.16 16.96C1013 18.8 1011.92 21.2 1011.92 24.16C1011.92 26.56 1012.52 28.56 1013.72 30.16C1014.92 31.76 1016.76 33.24 1019.24 34.6C1021.8 35.96 1025.08 37.52 1029.08 39.28C1033.64 41.28 1037.56 43.36 1040.84 45.52C1044.12 47.68 1046.6 50.28 1048.28 53.32C1050.04 56.36 1050.92 60.12 1050.92 64.6Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M74.0665 88H54.9864L14.4264 20.8H13.9464C14.1864 24.4 14.3864 28.28 14.5464 32.44C14.7864 36.52 14.9464 40.64 15.0264 44.8V88H1.22644V2.32H20.1864L60.6264 69.04H60.9864C60.8264 65.84 60.6664 62.16 60.5064 58C60.3464 53.84 60.2264 49.8 60.1465 45.88V2.32H74.0665V88Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M161.303 88L153.503 65.32H121.223L113.543 88H97.2227L128.663 1.96H146.183L177.623 88H161.303ZM142.103 30.04C141.783 28.92 141.303 27.4 140.663 25.48C140.023 23.56 139.383 21.6 138.743 19.6C138.183 17.52 137.743 15.8 137.423 14.44C137.023 16.04 136.503 17.88 135.863 19.96C135.303 22.04 134.743 24 134.183 25.84C133.623 27.68 133.223 29.08 132.983 30.04L125.423 52.12H149.543L142.103 30.04Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M273.73 88H254.651L214.09 20.8H213.611C213.851 24.4 214.05 28.28 214.21 32.44C214.451 36.52 214.611 40.64 214.691 44.8V88H200.891V2.32H219.85L260.29 69.04H260.651C260.491 65.84 260.331 62.16 260.171 58C260.01 53.84 259.891 49.8 259.811 45.88V2.32H273.73V88Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M360.967 88L353.167 65.32H320.887L313.207 88H296.887L328.327 1.96H345.847L377.287 88H360.967ZM341.767 30.04C341.447 28.92 340.967 27.4 340.327 25.48C339.687 23.56 339.047 21.6 338.407 19.6C337.847 17.52 337.407 15.8 337.087 14.44C336.687 16.04 336.167 17.88 335.527 19.96C334.967 22.04 334.407 24 333.847 25.84C333.287 27.68 332.887 29.08 332.647 30.04L325.087 52.12H349.207L341.767 30.04Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M467.035 88H449.395L423.955 50.08L415.915 56.44V88H400.555V2.32H415.915V42.64C417.515 40.64 419.155 38.6 420.835 36.52C422.515 34.44 424.195 32.36 425.875 30.28L449.035 2.32H466.435L434.995 40L467.035 88Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M519.29 88H483.29V79.24L493.61 75.4V15.04L483.29 11.08V2.32H519.29V11.08L508.97 15.04V75.4L519.29 79.24V88Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M692.436 2.32L670.236 88H653.316L639.756 38.8C639.276 37.2 638.756 35.16 638.196 32.68C637.636 30.12 637.116 27.64 636.636 25.24C636.156 22.84 635.836 21.08 635.676 19.96C635.516 21.08 635.196 22.84 634.716 25.24C634.316 27.56 633.796 30 633.156 32.56C632.596 35.12 632.076 37.28 631.596 39.04L618.396 88H601.356L579.276 2.32H594.636L606.396 51.16C606.956 53.24 607.476 55.6 607.956 58.24C608.516 60.88 609.036 63.52 609.516 66.16C609.996 68.72 610.356 70.96 610.596 72.88C610.836 70.88 611.196 68.56 611.676 65.92C612.156 63.28 612.676 60.72 613.236 58.24C613.796 55.68 614.316 53.52 614.796 51.76L628.236 2.32H643.116L656.796 51.88C657.356 53.64 657.916 55.84 658.476 58.48C659.036 61.04 659.556 63.6 660.036 66.16C660.516 68.72 660.876 70.96 661.116 72.88C661.356 70.88 661.676 68.6 662.076 66.04C662.556 63.48 663.076 60.88 663.636 58.24C664.196 55.6 664.756 53.24 665.316 51.16L677.076 2.32H692.436Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M791.599 45.04C791.599 53.92 790.119 61.68 787.159 68.32C784.279 74.88 779.839 80 773.839 83.68C767.839 87.36 760.319 89.2 751.279 89.2C742.159 89.2 734.599 87.36 728.599 83.68C722.679 80 718.239 74.84 715.279 68.2C712.399 61.56 710.959 53.8 710.959 44.92C710.959 36.12 712.399 28.44 715.279 21.88C718.239 15.24 722.679 10.12 728.599 6.52C734.599 2.84 742.199 1 751.399 1C760.439 1 767.919 2.84 773.839 6.52C779.839 10.12 784.279 15.24 787.159 21.88C790.119 28.44 791.599 36.16 791.599 45.04ZM727.159 45.04C727.159 54.72 729.079 62.32 732.919 67.84C736.759 73.36 742.879 76.12 751.279 76.12C759.759 76.12 765.879 73.36 769.639 67.84C773.479 62.32 775.399 54.72 775.399 45.04C775.399 35.36 773.519 27.76 769.759 22.24C765.999 16.72 759.879 13.96 751.399 13.96C742.999 13.96 736.839 16.72 732.919 22.24C729.079 27.76 727.159 35.36 727.159 45.04Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M846.204 2.32C857.484 2.32 865.804 4.4 871.164 8.56C876.604 12.72 879.324 19.04 879.324 27.52C879.324 31.68 878.524 35.24 876.924 38.2C875.404 41.16 873.404 43.64 870.924 45.64C868.444 47.56 865.764 49.12 862.884 50.32L887.484 88H870.204L849.684 54.16H837.204V88H821.844V2.32H846.204ZM845.244 15.16H837.204V41.56H845.724C852.044 41.56 856.604 40.44 859.404 38.2C862.284 35.88 863.724 32.48 863.724 28C863.724 23.36 862.204 20.08 859.164 18.16C856.204 16.16 851.564 15.16 845.244 15.16Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M977.902 88H960.262L934.822 50.08L926.782 56.44V88H911.422V2.32H926.782V42.64C928.382 40.64 930.022 38.6 931.702 36.52C933.382 34.44 935.062 32.36 936.742 30.28L959.902 2.32H977.302L945.862 40L977.902 88Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M1050.92 64.6C1050.92 72.2 1048.16 78.2 1042.64 82.6C1037.12 87 1029.48 89.2 1019.72 89.2C1010.28 89.2 1002.28 87.6 995.717 84.4V70C999.317 71.6 1003.28 73.08 1007.6 74.44C1011.92 75.72 1016.32 76.36 1020.8 76.36C1025.92 76.36 1029.68 75.36 1032.08 73.36C1034.48 71.36 1035.68 68.72 1035.68 65.44C1035.68 61.84 1034.16 59 1031.12 56.92C1028.08 54.84 1023.64 52.56 1017.8 50.08C1014.28 48.56 1010.92 46.76 1007.72 44.68C1004.52 42.6 1001.88 39.96 999.797 36.76C997.717 33.56 996.677 29.48 996.677 24.52C996.677 17.16 999.237 11.44 1004.36 7.36C1009.56 3.2 1016.48 1.12 1025.12 1.12C1029.68 1.12 1033.92 1.6 1037.84 2.56C1041.84 3.52 1045.84 4.88 1049.84 6.64L1044.92 19C1041.32 17.48 1037.88 16.28 1034.6 15.4C1031.4 14.52 1028.08 14.08 1024.64 14.08C1020.48 14.08 1017.32 15.04 1015.16 16.96C1013 18.8 1011.92 21.2 1011.92 24.16C1011.92 26.56 1012.52 28.56 1013.72 30.16C1014.92 31.76 1016.76 33.24 1019.24 34.6C1021.8 35.96 1025.08 37.52 1029.08 39.28C1033.64 41.28 1037.56 43.36 1040.84 45.52C1044.12 47.68 1046.6 50.28 1048.28 53.32C1050.04 56.36 1050.92 60.12 1050.92 64.6Z"
          stroke="white"
          strokeWidth="2"
          mask="url(#path-1-outside-1)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b"
          x="-3.77356"
          y="-4"
          width="1059.69"
          height="98.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export const Component: FC<Props> = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(1050/1440*100%)]">
      <div className="w-full">
        <Logo />
      </div>
    </div>
  )
}

import cv2
import numpy as np
f=cv2.imread('rplaceUSA.png')
cv2.imwrite('r1.png', f[1::3,1::3,:])

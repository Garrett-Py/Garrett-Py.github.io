import numpy as np
import matplotlib.pyplot as plt


def iterateMe(iter):
   i = np.arange(1,iter+1, 1)
   x = np.empty(iter);
   x[0] = 0.5;
   z = 300; # amount of data points for r axis
   x_iter = np.empty(z)
   r = np.empty(z);
   r[0] = 0;
   for k in range(z-1):
      r[k+1] = r[k] + 4/z
      for j in range(iter-1):
         x[j+1] = r[k]*x[j]*(1-x[j])
      x_iter[k] = x[iter-1] 
   plt.plot(r,x_iter, 'ko', markersize=0.2)
   


bif = 0;
iter=100
while bif<150:
   iterateMe(iter)
   iter=iter+1
   bif+=1


plt.xlim(left=1, right=4)
plt.ylim(bottom=0, top=1)
plt.axis('off')
plt.tight_layout(pad=0)
plt.savefig('logistic1.png', format='png', dpi=2000, transparent=True)

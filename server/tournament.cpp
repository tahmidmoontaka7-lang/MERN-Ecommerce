#include<bits/stdc++.h>
using namespace std;
int main()
{
    int t;
    cin >> t;
    while(t--)
    {
        int n,j,k;
        cin >> n >>j >>k;
        vector<int>a(n);
        int mx=0;
        for(int i=0;i<n;i++)
        {
            cin>>a[i];
            mx=max(mx,a[i]);
        }
 if(k > 1) {
            cout << "YES\n";
        }
        else {
            if(a[j-1]==mx)
                cout << "YES\n";
            else
                cout << "NO\n";
        }
    }
return 0;
    }

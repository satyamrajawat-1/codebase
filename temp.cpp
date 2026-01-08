#include <bits/stdc++.h>
using namespace std;

int main() {
	
	    int n;
	    cin>>n;
	    char arr[n];
	    for(int i = 0 ; i<n ; i++){
	        cin>>arr[i];
	    }
	    for(int i = 0 ; i<n ; i++){
	        cout<<arr[i];
	    }
	    int ans = 0;
	    for(int i = 0 ; i<n-1 ; i++){
	        for(int j = i+1 ; j<n ; j++){
	            if(arr[i]==arr[j]){
	                ans = 1;
	                break;
	            }
	        }
	        if(ans) break;
	    }
	    if(ans){
	        cout<<"YES"<<endl;
	    }
	    else{
	        cout<<"NO"<<endl;
	    }
	}



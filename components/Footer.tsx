import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">머니와이즈</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              당신의 현명한 금융 생활을 위한 파트너.<br/>
              소액 대출부터 신용카드 현금화, 주식 투자 꿀팁까지<br/>
              검증된 정보만을 제공합니다.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-white mb-4">카테고리</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/finance" className="hover:text-blue-400 transition-colors">금융/재테크</a></li>
              <li><a href="#/loan" className="hover:text-blue-400 transition-colors">대출꿀팁</a></li>
              <li><a href="#/investment" className="hover:text-blue-400 transition-colors">투자/주식</a></li>
              <li><a href="#/welfare" className="hover:text-blue-400 transition-colors">복지/정책</a></li>
            </ul>
          </div>

          {/* Legal/Support */}
          <div>
            <h4 className="font-bold text-white mb-4">고객센터</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">제휴 문의</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">사이트맵</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">뉴스레터 구독</h4>
            <p className="text-xs text-slate-400 mb-3">최신 금융 정보를 놓치지 마세요.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="bg-slate-800 border border-slate-700 text-sm p-2 rounded w-full focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 rounded transition-colors">
                구독
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <Facebook size={20} className="hover:text-blue-400 cursor-pointer" />
              <Instagram size={20} className="hover:text-pink-400 cursor-pointer" />
              <Twitter size={20} className="hover:text-sky-400 cursor-pointer" />
              <Mail size={20} className="hover:text-emerald-400 cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>© 2024 MoneyWise. All rights reserved. 본 사이트의 콘텐츠는 저작권법의 보호를 받습니다.</p>
          <p className="mt-2">주의: 본 사이트의 정보는 참고용이며, 실제 투자 및 대출 결정에 대한 책임은 본인에게 있습니다.</p>
        </div>
      </div>
    </footer>
  );
};
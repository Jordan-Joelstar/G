FROM node:20

RUN git clone https://github.com/Jordan-Joelstar/G/jordan

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/jordan/node_modules

# Install dependencies
WORKDIR /root/jordan-joelstar
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
